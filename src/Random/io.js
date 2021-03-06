Server {
  nsps:
   { '/':
      Namespace {
        name: '/',
        server: [Circular],
        sockets: {},
        connected: {},
        fns: [],
        ids: 0,
        rooms: [],
        flags: {},
        adapter: [Object] } },
  parentNsps: Map {},
  _path: '/socket.io',
  _serveClient: true,
  parser:
   { protocol: 4,
     types:
      [ 'CONNECT',
        'DISCONNECT',
        'EVENT',
        'ACK',
        'ERROR',
        'BINARY_EVENT',
        'BINARY_ACK' ],
     CONNECT: 0,
     DISCONNECT: 1,
     EVENT: 2,
     ACK: 3,
     ERROR: 4,
     BINARY_EVENT: 5,
     BINARY_ACK: 6,
     Encoder: [Function: Encoder],
     Decoder: [Function: Decoder] },
  encoder: Encoder {},
  _adapter: [Function: Adapter],
  _origins: '*:*',
  sockets:
   Namespace {
     name: '/',
     server: [Circular],
     sockets: {},
     connected: {},
     fns: [],
     ids: 0,
     rooms: [],
     flags: {},
     adapter: Adapter { nsp: [Circular], rooms: {}, sids: {}, encoder: Encoder {} } },
  eio:
   Server {
     clients: {},
     clientsCount: 0,
     wsEngine: 'ws',
     pingTimeout: 5000,
     pingInterval: 25000,
     upgradeTimeout: 10000,
     maxHttpBufferSize: 100000000,
     transports: [ 'polling', 'websocket' ],
     allowUpgrades: true,
     allowRequest: [Function: bound ],
     cookie: 'io',
     cookiePath: '/',
     cookieHttpOnly: true,
     perMessageDeflate: { threshold: 1024 },
     httpCompression: { threshold: 1024 },
     initialPacket: [ '0' ],
     ws:
      WebSocketServer {
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        options: [Object] },
     _events: { connection: [Function: bound ] },
     _eventsCount: 1 },
  httpServer:
   Server {
     domain: null,
     _events:
      { connection: [Function: connectionListener],
        close: [Function: bound ],
        listening: [Function: bound ],
        upgrade: [Function],
        request: [Function] },
     _eventsCount: 5,
     _maxListeners: undefined,
     _connections: 0,
     _handle: null,
     _usingSlaves: false,
     _slaves: [],
     _unref: false,
     allowHalfOpen: true,
     pauseOnConnect: false,
     httpAllowHalfOpen: false,
     timeout: 120000,
     keepAliveTimeout: 5000,
     _pendingResponseData: 0,
     maxHeadersCount: null,
     [Symbol(IncomingMessage)]: { [Function: IncomingMessage] super_:[Object] },
     [Symbol(ServerResponse)]: { [Function: ServerResponse] super_: [Object] },
     [Symbol(asyncId)]: -1 },
  engine:
   Server {
     clients: {},
     clientsCount: 0,
     wsEngine: 'ws',
     pingTimeout: 5000,
     pingInterval: 25000,
     upgradeTimeout: 10000,
     maxHttpBufferSize: 100000000,
     transports: [ 'polling', 'websocket' ],
     allowUpgrades: true,
     allowRequest: [Function: bound ],
     cookie: 'io',
     cookiePath: '/',
     cookieHttpOnly: true,
     perMessageDeflate: { threshold: 1024 },
     httpCompression: { threshold: 1024 },
     initialPacket: [ '0' ],
     ws:
      WebSocketServer {
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        options: [Object] },
     _events: { connection: [Function: bound ] },
     _eventsCount: 1 } }