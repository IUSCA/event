define({ "api": [
  {
    "group": "Event",
    "type": "get",
    "url": "/subscribe",
    "title": "Subscribe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>JWT token to be relayed to event source. Should be a JWT token issued by SCA Auth service.</p>"
          }
        ]
      }
    },
    "description": "<p>Subscribe to AMQP. Once connected, you need to emit bind messages to bind to specific exchange:key. { &quot;bind&quot;: { &quot;ex&quot;: &quot;wf&quot;, &quot;key&quot;: &quot;task.123455.#&quot;, } } You will receive an error event if you are not authorized</p>",
    "version": "0.0.0",
    "filename": "api/controllers/index.js",
    "groupTitle": "Event",
    "name": "GetSubscribe"
  },
  {
    "group": "Notification",
    "type": "get",
    "url": "/notification",
    "title": "",
    "description": "<p>Query notification requests that belongs to user (for admin return all)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "find",
            "description": "<p>Optional Mongo query to perform (you need to JSON.stringify)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "sort",
            "description": "<p>Mongo sort object - defaults to _id. Enter in string format like &quot;-name%20desc&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "select",
            "description": "<p>Fields to load - defaults to 'logical_id'. Multiple fields can be entered with %20 as delimiter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Maximum number of records to return - defaults to 100</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "skip",
            "description": "<p>Record offset for pagination (default to 0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>(Only for sca:admin) Override user_id to search (default to sub in jwt). Set it to null if you want to query all users.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>A valid JWT token &quot;Bearer: xxxxx&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "List",
            "description": "<p>of notificationss (maybe limited / skipped) and total number</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/notification.js",
    "groupTitle": "Notification",
    "name": "GetNotification"
  },
  {
    "group": "Notification",
    "type": "post",
    "url": "/notification",
    "title": "",
    "description": "<p>Register new notification request</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>A valid JWT token &quot;Bearer: xxxxx&quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Event name (like &quot;wf.task&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "handler",
            "description": "<p>Handler name (like &quot;email&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "config",
            "description": "<p>Detail for this notification (event/handler specific - please read README)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Notification",
            "description": "<p>object registered</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/notification.js",
    "groupTitle": "Notification",
    "name": "PostNotification"
  },
  {
    "group": "System",
    "type": "get",
    "url": "/health",
    "title": "Get API status",
    "description": "<p>Get current API status</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>'ok' or 'failed'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/index.js",
    "groupTitle": "System",
    "name": "GetHealth"
  }
] });
