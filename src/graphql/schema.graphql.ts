import { gql } from "@apollo/client";

const typeDefs = gql`
  #graphql
  type Board {
    id: ID!
    name: String!
    project: Project!
    projectId: ID!
    lists(
      createdAt: ModelStringKeyConditionInput
      filter: ModelListFilterInput
      sortDirection: ModelSortDirection
      limit: Int
      nextToken: String
    ): ModelListConnection
    createdAt: String!
    updatedAt: String!
  }

  type Comment {
    id: ID!
    text: String!
    taskId: ID!
    task: Task!
    author: String!
    createdAt: String!
    updatedAt: String!
  }

  input CreateBoardInput {
    id: ID
    name: String!
    projectId: ID!
    createdAt: String
  }

  input CreateCommentInput {
    id: ID
    text: String!
    taskId: ID!
    author: String!
    createdAt: String
  }

  input CreateListInput {
    id: ID
    name: String!
    boardId: ID!
    priority: Int
    createdAt: String
  }

  input CreateProjectInput {
    id: ID
    name: String!
    description: String
    createdAt: String
    updatedAt: String
  }

  input CreateTaskInput {
    id: ID
    title: String!
    description: String
    dueDate: String
    priority: Int
    status: TaskStatus!
    assignee: String!
    reporter: String!
    listId: ID!
    timeRemaining: Int
    createdAt: String
  }

  input DeleteBoardInput {
    id: ID!
  }

  input DeleteCommentInput {
    id: ID!
  }

  input DeleteListInput {
    id: ID!
  }

  input DeleteProjectInput {
    id: ID!
  }

  input DeleteTaskInput {
    id: ID!
  }

  type List {
    id: ID!
    name: String!
    board: Board!
    boardId: ID!
    priority: Int
    tasks(
      createdAt: ModelStringKeyConditionInput
      filter: ModelTaskFilterInput
      sortDirection: ModelSortDirection
      limit: Int
      nextToken: String
    ): ModelTaskConnection
    createdAt: String!
    updatedAt: String!
  }

  enum ModelAttributeTypes {
    binary
    binarySet
    bool
    list
    map
    number
    numberSet
    string
    stringSet
    _null
  }

  input ModelBoardConditionInput {
    name: ModelStringInput
    projectId: ModelIDInput
    createdAt: ModelStringInput
    and: [ModelBoardConditionInput]
    or: [ModelBoardConditionInput]
    not: ModelBoardConditionInput
  }

  type ModelBoardConnection {
    items: [Board]!
    nextToken: String
  }

  input ModelBoardFilterInput {
    id: ModelIDInput
    name: ModelStringInput
    projectId: ModelIDInput
    createdAt: ModelStringInput
    and: [ModelBoardFilterInput]
    or: [ModelBoardFilterInput]
    not: ModelBoardFilterInput
  }

  input ModelBooleanInput {
    ne: Boolean
    eq: Boolean
    attributeExists: Boolean
    attributeType: ModelAttributeTypes
  }

  input ModelCommentConditionInput {
    text: ModelStringInput
    taskId: ModelIDInput
    author: ModelStringInput
    createdAt: ModelStringInput
    and: [ModelCommentConditionInput]
    or: [ModelCommentConditionInput]
    not: ModelCommentConditionInput
  }

  type ModelCommentConnection {
    items: [Comment]!
    nextToken: String
  }

  input ModelCommentFilterInput {
    id: ModelIDInput
    text: ModelStringInput
    taskId: ModelIDInput
    author: ModelStringInput
    createdAt: ModelStringInput
    and: [ModelCommentFilterInput]
    or: [ModelCommentFilterInput]
    not: ModelCommentFilterInput
  }

  input ModelFloatInput {
    ne: Float
    eq: Float
    le: Float
    lt: Float
    ge: Float
    gt: Float
    between: [Float]
    attributeExists: Boolean
    attributeType: ModelAttributeTypes
  }

  input ModelIDInput {
    ne: ID
    eq: ID
    le: ID
    lt: ID
    ge: ID
    gt: ID
    contains: ID
    notContains: ID
    between: [ID]
    beginsWith: ID
    attributeExists: Boolean
    attributeType: ModelAttributeTypes
    size: ModelSizeInput
  }

  input ModelIntInput {
    ne: Int
    eq: Int
    le: Int
    lt: Int
    ge: Int
    gt: Int
    between: [Int]
    attributeExists: Boolean
    attributeType: ModelAttributeTypes
  }

  input ModelListConditionInput {
    name: ModelStringInput
    boardId: ModelIDInput
    priority: ModelIntInput
    createdAt: ModelStringInput
    and: [ModelListConditionInput]
    or: [ModelListConditionInput]
    not: ModelListConditionInput
  }

  type ModelListConnection {
    items: [List]!
    nextToken: String
  }

  input ModelListFilterInput {
    id: ModelIDInput
    name: ModelStringInput
    boardId: ModelIDInput
    priority: ModelIntInput
    createdAt: ModelStringInput
    and: [ModelListFilterInput]
    or: [ModelListFilterInput]
    not: ModelListFilterInput
  }

  input ModelProjectConditionInput {
    name: ModelStringInput
    description: ModelStringInput
    createdAt: ModelStringInput
    updatedAt: ModelStringInput
    and: [ModelProjectConditionInput]
    or: [ModelProjectConditionInput]
    not: ModelProjectConditionInput
  }

  type ModelProjectConnection {
    items: [Project]!
    nextToken: String
  }

  input ModelProjectFilterInput {
    id: ModelIDInput
    name: ModelStringInput
    description: ModelStringInput
    createdAt: ModelStringInput
    updatedAt: ModelStringInput
    and: [ModelProjectFilterInput]
    or: [ModelProjectFilterInput]
    not: ModelProjectFilterInput
  }

  input ModelSizeInput {
    ne: Int
    eq: Int
    le: Int
    lt: Int
    ge: Int
    gt: Int
    between: [Int]
  }

  enum ModelSortDirection {
    ASC
    DESC
  }

  input ModelStringInput {
    ne: String
    eq: String
    le: String
    lt: String
    ge: String
    gt: String
    contains: String
    notContains: String
    between: [String]
    beginsWith: String
    attributeExists: Boolean
    attributeType: ModelAttributeTypes
    size: ModelSizeInput
  }

  input ModelStringKeyConditionInput {
    eq: String
    le: String
    lt: String
    ge: String
    gt: String
    between: [String]
    beginsWith: String
  }

  input ModelSubscriptionBoardFilterInput {
    id: ModelSubscriptionIDInput
    name: ModelSubscriptionStringInput
    projectId: ModelSubscriptionIDInput
    createdAt: ModelSubscriptionStringInput
    and: [ModelSubscriptionBoardFilterInput]
    or: [ModelSubscriptionBoardFilterInput]
  }

  input ModelSubscriptionBooleanInput {
    ne: Boolean
    eq: Boolean
  }

  input ModelSubscriptionCommentFilterInput {
    id: ModelSubscriptionIDInput
    text: ModelSubscriptionStringInput
    taskId: ModelSubscriptionIDInput
    author: ModelSubscriptionStringInput
    createdAt: ModelSubscriptionStringInput
    and: [ModelSubscriptionCommentFilterInput]
    or: [ModelSubscriptionCommentFilterInput]
  }

  input ModelSubscriptionFloatInput {
    ne: Float
    eq: Float
    le: Float
    lt: Float
    ge: Float
    gt: Float
    between: [Float]
    in: [Float]
    notIn: [Float]
  }

  input ModelSubscriptionIDInput {
    ne: ID
    eq: ID
    le: ID
    lt: ID
    ge: ID
    gt: ID
    contains: ID
    notContains: ID
    between: [ID]
    beginsWith: ID
    in: [ID]
    notIn: [ID]
  }

  input ModelSubscriptionIntInput {
    ne: Int
    eq: Int
    le: Int
    lt: Int
    ge: Int
    gt: Int
    between: [Int]
    in: [Int]
    notIn: [Int]
  }

  input ModelSubscriptionListFilterInput {
    id: ModelSubscriptionIDInput
    name: ModelSubscriptionStringInput
    boardId: ModelSubscriptionIDInput
    priority: ModelSubscriptionIntInput
    createdAt: ModelSubscriptionStringInput
    and: [ModelSubscriptionListFilterInput]
    or: [ModelSubscriptionListFilterInput]
  }

  input ModelSubscriptionProjectFilterInput {
    id: ModelSubscriptionIDInput
    name: ModelSubscriptionStringInput
    description: ModelSubscriptionStringInput
    createdAt: ModelSubscriptionStringInput
    updatedAt: ModelSubscriptionStringInput
    and: [ModelSubscriptionProjectFilterInput]
    or: [ModelSubscriptionProjectFilterInput]
  }

  input ModelSubscriptionStringInput {
    ne: String
    eq: String
    le: String
    lt: String
    ge: String
    gt: String
    contains: String
    notContains: String
    between: [String]
    beginsWith: String
    in: [String]
    notIn: [String]
  }

  input ModelSubscriptionTaskFilterInput {
    id: ModelSubscriptionIDInput
    title: ModelSubscriptionStringInput
    description: ModelSubscriptionStringInput
    dueDate: ModelSubscriptionStringInput
    priority: ModelSubscriptionIntInput
    status: ModelSubscriptionStringInput
    assignee: ModelSubscriptionStringInput
    reporter: ModelSubscriptionStringInput
    listId: ModelSubscriptionIDInput
    timeRemaining: ModelSubscriptionIntInput
    createdAt: ModelSubscriptionStringInput
    and: [ModelSubscriptionTaskFilterInput]
    or: [ModelSubscriptionTaskFilterInput]
  }

  input ModelTaskConditionInput {
    title: ModelStringInput
    description: ModelStringInput
    dueDate: ModelStringInput
    priority: ModelIntInput
    status: ModelTaskStatusInput
    assignee: ModelStringInput
    reporter: ModelStringInput
    listId: ModelIDInput
    timeRemaining: ModelIntInput
    createdAt: ModelStringInput
    and: [ModelTaskConditionInput]
    or: [ModelTaskConditionInput]
    not: ModelTaskConditionInput
  }

  type ModelTaskConnection {
    items: [Task]!
    nextToken: String
  }

  input ModelTaskFilterInput {
    id: ModelIDInput
    title: ModelStringInput
    description: ModelStringInput
    dueDate: ModelStringInput
    priority: ModelIntInput
    status: ModelTaskStatusInput
    assignee: ModelStringInput
    reporter: ModelStringInput
    listId: ModelIDInput
    timeRemaining: ModelIntInput
    createdAt: ModelStringInput
    and: [ModelTaskFilterInput]
    or: [ModelTaskFilterInput]
    not: ModelTaskFilterInput
  }

  input ModelTaskStatusInput {
    eq: TaskStatus
    ne: TaskStatus
  }

  type Mutation {
    createProject(
      input: CreateProjectInput!
      condition: ModelProjectConditionInput
    ): Project
    updateProject(
      input: UpdateProjectInput!
      condition: ModelProjectConditionInput
    ): Project
    deleteProject(
      input: DeleteProjectInput!
      condition: ModelProjectConditionInput
    ): Project
    createBoard(
      input: CreateBoardInput!
      condition: ModelBoardConditionInput
    ): Board
    updateBoard(
      input: UpdateBoardInput!
      condition: ModelBoardConditionInput
    ): Board
    deleteBoard(
      input: DeleteBoardInput!
      condition: ModelBoardConditionInput
    ): Board
    createList(
      input: CreateListInput!
      condition: ModelListConditionInput
    ): List
    updateList(
      input: UpdateListInput!
      condition: ModelListConditionInput
    ): List
    deleteList(
      input: DeleteListInput!
      condition: ModelListConditionInput
    ): List
    createTask(
      input: CreateTaskInput!
      condition: ModelTaskConditionInput
    ): Task
    updateTask(
      input: UpdateTaskInput!
      condition: ModelTaskConditionInput
    ): Task
    deleteTask(
      input: DeleteTaskInput!
      condition: ModelTaskConditionInput
    ): Task
    createComment(
      input: CreateCommentInput!
      condition: ModelCommentConditionInput
    ): Comment
    updateComment(
      input: UpdateCommentInput!
      condition: ModelCommentConditionInput
    ): Comment
    deleteComment(
      input: DeleteCommentInput!
      condition: ModelCommentConditionInput
    ): Comment
  }

  type Project {
    id: ID!
    name: String!
    description: String
    createdAt: String!
    updatedAt: String!
    boards(
      createdAt: ModelStringKeyConditionInput
      filter: ModelBoardFilterInput
      sortDirection: ModelSortDirection
      limit: Int
      nextToken: String
    ): ModelBoardConnection
  }

  type Query {
    getProject(id: ID!): Project
    listProjects(
      filter: ModelProjectFilterInput
      limit: Int
      nextToken: String
    ): ModelProjectConnection
    getBoard(id: ID!): Board
    listBoards(
      filter: ModelBoardFilterInput
      limit: Int
      nextToken: String
    ): ModelBoardConnection
    getList(id: ID!): List
    listLists(
      filter: ModelListFilterInput
      limit: Int
      nextToken: String
    ): ModelListConnection
    getTask(id: ID!): Task
    listTasks(
      filter: ModelTaskFilterInput
      limit: Int
      nextToken: String
    ): ModelTaskConnection
    getComment(id: ID!): Comment
    listComments(
      filter: ModelCommentFilterInput
      limit: Int
      nextToken: String
    ): ModelCommentConnection
    boardsByProjectIdAndCreatedAt(
      projectId: ID!
      createdAt: ModelStringKeyConditionInput
      sortDirection: ModelSortDirection
      filter: ModelBoardFilterInput
      limit: Int
      nextToken: String
    ): ModelBoardConnection
    listsByBoardIdAndCreatedAt(
      boardId: ID!
      createdAt: ModelStringKeyConditionInput
      sortDirection: ModelSortDirection
      filter: ModelListFilterInput
      limit: Int
      nextToken: String
    ): ModelListConnection
    tasksByListIdAndCreatedAt(
      listId: ID!
      createdAt: ModelStringKeyConditionInput
      sortDirection: ModelSortDirection
      filter: ModelTaskFilterInput
      limit: Int
      nextToken: String
    ): ModelTaskConnection
    commentsByTaskIdAndCreatedAt(
      taskId: ID!
      createdAt: ModelStringKeyConditionInput
      sortDirection: ModelSortDirection
      filter: ModelCommentFilterInput
      limit: Int
      nextToken: String
    ): ModelCommentConnection
  }

  type Subscription {
    onCreateProject(filter: ModelSubscriptionProjectFilterInput): Project
    onUpdateProject(filter: ModelSubscriptionProjectFilterInput): Project
    onDeleteProject(filter: ModelSubscriptionProjectFilterInput): Project
    onCreateBoard(filter: ModelSubscriptionBoardFilterInput): Board
    onUpdateBoard(filter: ModelSubscriptionBoardFilterInput): Board
    onDeleteBoard(filter: ModelSubscriptionBoardFilterInput): Board
    onCreateList(filter: ModelSubscriptionListFilterInput): List
    onUpdateList(filter: ModelSubscriptionListFilterInput): List
    onDeleteList(filter: ModelSubscriptionListFilterInput): List
    onCreateTask(filter: ModelSubscriptionTaskFilterInput): Task
    onUpdateTask(filter: ModelSubscriptionTaskFilterInput): Task
    onDeleteTask(filter: ModelSubscriptionTaskFilterInput): Task
    onCreateComment(filter: ModelSubscriptionCommentFilterInput): Comment
    onUpdateComment(filter: ModelSubscriptionCommentFilterInput): Comment
    onDeleteComment(filter: ModelSubscriptionCommentFilterInput): Comment
  }

  type Task {
    id: ID!
    title: String!
    description: String
    dueDate: String
    priority: Int
    status: TaskStatus!
    assignee: String!
    reporter: String!
    list: List!
    listId: ID!
    comments(
      createdAt: ModelStringKeyConditionInput
      filter: ModelCommentFilterInput
      sortDirection: ModelSortDirection
      limit: Int
      nextToken: String
    ): ModelCommentConnection
    timeRemaining: Int
    createdAt: String!
    updatedAt: String!
  }

  enum TaskStatus {
    BACKLOG
    TO_DO
    IN_PROGRESS
    DONE
  }

  input UpdateBoardInput {
    id: ID!
    name: String
    projectId: ID
    createdAt: String
  }

  input UpdateCommentInput {
    id: ID!
    text: String
    taskId: ID
    author: String
    createdAt: String
  }

  input UpdateListInput {
    id: ID!
    name: String
    boardId: ID
    priority: Int
    createdAt: String
  }

  input UpdateProjectInput {
    id: ID!
    name: String
    description: String
    createdAt: String
    updatedAt: String
  }

  input UpdateTaskInput {
    id: ID!
    title: String
    description: String
    dueDate: String
    priority: Int
    status: TaskStatus
    assignee: String
    reporter: String
    listId: ID
    timeRemaining: Int
    createdAt: String
  }
`;

export default typeDefs;
