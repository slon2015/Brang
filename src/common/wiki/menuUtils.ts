
export interface MenuEntry {
  title: string;
  topic: string | null;
  ref: string;
}

export interface MenuTreeNode {
  name: string;
  type: "article" | "topic";
}

export interface MenuTopicNode extends MenuTreeNode {
  childrens: MenuItem[];
  fullName: string;
}

export interface MenuArticleNode extends MenuTreeNode {
  id: string;
}

export type MenuItem = MenuArticleNode | MenuTopicNode

export interface MenuTree {
  items: MenuItem[]
}



function createTopic(topicName: string, allTopics: Map<string, MenuTopicNode>): MenuTopicNode {
  const isNested = topicName.includes('/'),
    name = isNested? topicName.substring(topicName.lastIndexOf('/') + 1): topicName,
    result = {
      name,
      fullName: topicName,
      childrens: [],
      type: "topic"
    } as MenuTopicNode
  if (isNested) {
    const parentTopicName = topicName.substring(0, topicName.lastIndexOf('/'));
    var parentTopic: MenuTopicNode
    if (allTopics.has(parentTopicName)) {
      parentTopic = allTopics.get(parentTopicName)!
    } else {
      parentTopic = createTopic(parentTopicName, allTopics)
    }
    parentTopic!.childrens.push(result)
  }
  allTopics.set(topicName, result)
  return result;
}

function getParentTopic(topicName: string, allTopics: Map<string, MenuTopicNode>): MenuTopicNode {
  const parentTopicName = topicName.substring(0, topicName.lastIndexOf('/'));
  return allTopics.get(parentTopicName)!
}

function getFirstLevelTopic(topic: MenuTopicNode, allTopics: Map<string, MenuTopicNode>) {
  var currentTopic = topic;
  while (currentTopic.fullName.includes("/")) {
    currentTopic = getParentTopic(currentTopic.fullName, allTopics)
  }
  return currentTopic;
}

export function readMenu(entries: MenuEntry[]): MenuTree {
  const topics = new Map<string, MenuTopicNode>(),
    items = [] as MenuItem[] // items includes only articles without topics or first level topics
  entries.forEach(entry => { // lists articles
    const node = {
      name: entry.title,
      id: entry.ref,
      type: "article"
    } as MenuArticleNode
    if (entry.topic !== null) { // handle articles with topic
      var topic: MenuTopicNode
      if (topics.has(entry.topic)) {
        topic = topics.get(entry.topic)!
      } else {
        topic = createTopic(entry.topic, topics)
        const firstLevelTopic = getFirstLevelTopic(topic, topics)
        if (!items.includes(firstLevelTopic)) { // add first level topics only once
          items.push(firstLevelTopic)
        }
      }
      topic.childrens!.push(node)
    } else {
      items.push(node) // add articles without topic
    }
  })
  return {
    items
  }
}
