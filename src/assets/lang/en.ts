/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const m = {
  hourTip: 'Select Hour',
  minuteTip: 'Select Minute',
  secondTip: 'Select Second',
  second: 's',
  yearSuffix: 'Year',
  monthsHead: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec',
  months: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec',
  weeks: 'Mon_Tue_Wed_Thu_Fir_Sat_Sun',
  hello: 'Hello',
  helloMessage: 'Welcome Back, Apache SkyWalking APM System !',
  username: 'Username',
  password: 'Password',
  title: 'Title',
  width: 'Width',
  height: 'Height',
  login: 'Login Now',
  signout: 'Sign Out',
  dashboard: 'Dashboard',
  topology: 'Topology',
  trace: 'Trace',
  alarm: 'Alarm',
  auto: 'Auto',
  reload: 'Reload',
  usermode: 'User Mode',
  editmode: 'Edit Mode',
  currentService: 'Current Service',
  currentEndpoint: 'Current Endpoint',
  currentInstance: 'Current Instance',
  currentVersion: 'Current Version',
  currentPage: 'Current Page',
  version: 'Version',
  page: 'Page',
  currentDatabase: 'Current Database',
  templateConfig: 'Template Configuration',
  copy: 'Copy',
  reset: 'Reset',
  apply: 'Apply',
  createTemplate: 'Create Template',
  templateType: 'Template Type',
  templateName: 'Template Name',
  template: 'Template',
  confirm: 'Confirm',
  cancel: 'Cancel',
  createTab: 'Create Tab',
  tabName: 'Tab Name',
  nouse: 'No Use',
  allServices: 'All Services',
  serviceDetail: 'Service Detail',
  detectPoint: 'Detect Point',
  callType: 'Call Type',
  server: 'Server',
  client: 'Client',
  name: 'Name',
  type: 'Type',
  cpm: 'Cpm',
  sla: 'SLA',
  latency: 'Latency',
  avgResponseTime: 'Avg Response Time ( ms )',
  avgThroughput: 'Load (CPM - calls per minute)',
  avgSLA: 'Successful Rate ( % )',
  all: 'All',
  success: 'Success',
  error: 'Error',
  service: 'Service',
  instance: 'Instance',
  database: 'Database',
  endpoint: 'Endpoint',
  cache: 'Cache',
  global: 'Global',
  serviceendpoint: 'ServiceEndpoint',
  serviceinstance: 'ServiceInstance',
  databaseaccess: 'DatabaseAccess',
  servicerelation: 'ServiceRelation',
  serviceinstancerelation: 'ServiceInstanceRelation',
  endpointrelation: 'EndpointRelation',
  status: 'Status',
  endpointName: 'Endpoint Name',
  search: 'Search',
  clear: 'Clear',
  more: 'More',
  traceID: 'TraceID',
  range: 'Range',
  timeRange: 'Time Range',
  duration: 'Duration',
  startTime: 'startTime',
  start: 'Start',
  spans: 'Spans',
  spanInfo: 'Span Info',
  spanType: 'Span Type',
  time: 'Time',
  tags: 'Tags',
  logs: 'Logs',
  component: 'Component',
  table: 'Table',
  list: 'List',
  tree: 'Tree',
  filterScope: 'Filter Scope',
  searchKeyword: 'Search Keyword',
  quarterHourCutTip: 'Last 15 mins',
  halfHourCutTip: 'Last 30 mins',
  hourCutTip: 'Last 1 hour',
  dayCutTip: 'Last 1 day',
  weekCutTip: 'Last 1 week',
  monthCutTip: 'Last 1 month',
  serverZone: 'Server Zone',
  percentResponse: 'Response Time Percentile ( ms )',
  exportImage: 'Export image',
  queryData: 'Query',
  previousService: 'Previous Service',
  nextService: 'Next Service',
  object: 'Object',
  metrics: 'Metrics',
  ShowInstanceDependency: 'Show Instance Dependency',
  InstanceDependencyTitle: 'Service Instance Dependency',
  profile: 'Profile',
  newTask: 'New Task',
  monitorTime: 'Monitor Time',
  monitorDuration: 'Monitor Duration',
  minThreshold: 'Min Duration Threshold',
  dumpPeriod: 'Dump Period',
  createTask: 'Create Task',
  maxSamplingCount: 'Max Sampling Count',
  analyze: 'Analyze',
  noData: 'No Data',
  taskInfo: 'Task Information',
  task: 'Task',
  operationType: 'Operation Type',
  operationTime: 'Operation Time',
  taskView: 'View Task',
  includeChildren: 'Include Children',
  excludeChildren: 'Exclude Children',
  view: 'View',
  timeTips: 'Time interval cannot exceed 60 days',
  standardAPM: 'Standard',
  entityType: 'Entity type',
  independentSelector: 'Selectors',
  unknownMetrics: 'Unknown Metrics',
  labels: 'Labels',
  aggregation: 'Data Calculation',
  unit: 'Unit',
  labelsIndex: 'Label Subscript',
  parentService: 'Parent Service',
  isParentService: 'Set Parent Service',
  noneParentService: 'No Parent Service',
  serviceGroup: 'Service Group',
  endpointFilter: 'Endpoint Filter',
  editConfig: 'Edit Config',
  databaseView: 'Database',
  browserView: 'Browser',
  metricsView: 'NOC - Network Operation Center',
  sortOrder: 'Sort Order',
  descendOrder: 'Descend Order',
  increaseOrder: 'Increase Order',
  defaultOrder: 'Default Order',
  chartType: 'Chart Type',
  currentDepth: 'Current Depth',
  tagsTip:
    'Only tags defined in the core/default/searchableTagKeys are searchable. Check more details on the Configuration Vocabulary page',
  tagsLink: 'Configuration Vocabulary page',
  addTag: 'Please add a tag',
  log: 'Log',
  logCategory: 'Log Category',
  errorCatalog: 'Error Catalog',
  logDetail: 'Log Detail ',
  timeReload: 'The time interval must be greater than 0',
  errorInfo: 'Error Info',
  stack: 'Stack',
  serviceVersion: 'Service Version',
  errorPage: 'Error Page',
  category: 'Category',
  grade: 'Grade',
  setConditions: 'More Conditions',
  metricName: 'Metric Name',
  keywordsOfContent: 'Keys Of Content',
  excludingKeywordsOfContent: 'Exclude Keys Of Content',
  return: 'Return',
  isError: 'Error',
  contentType: 'Content Type',
  content: 'Content',
};

export default m;
