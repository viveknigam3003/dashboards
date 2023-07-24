## Request Format

1. API to get list of dashboards
`GET /api/dashboards`

```JSON
{
  "dashboards": [
    {
      "name": "Default Dashboard",
      "id": "[uuid]",
      "default": true
    },
    {
      "name": "Dashboard 2",
      "id": "[uuid]"
    },
  ]
}
```

### DATA

```JSON
{
  "dashboards": [
    {
      "name": "Default Dashboard",
      "id": "3d1cf28d-6e79-43a5-9f58-61a957daad8b",
      "default": true
    },
    {
      "name": "Sales Dashboard",
      "id": "9b6c4b12-d4d8-458b-a45f-e4d9f3fa1f10"
    },
    {
      "name": "Marketing Dashboard",
      "id": "0f2f6afd-891a-4c3a-8bf3-d8e24bf77c9c"
    }
  ]
}
```

2. Initial request to get widgets to be rendered on the screen

`GET /api/dashboard?default=true`

```JSON
    {
      "name": "Dashboard 1",
      "id": "[uuid]",
      "widgets": [
        {
          "type": "type1",
          "id": "[uuid]",
          "size": {
            "width": 2,
            "height": 1
          },
          "position": {
            "x": 0,
            "y": 0
          }
        },
        {
          "id": "[uuid]",
          "size": {
            "width": 1,
            "height": 4
          },
          "position": {
            "x": 1,
            "y": 0
          }
        }
      ]
    }
```

### DATA

```JSON
[
  {
    "name": "Default Dashboard",
    "id": "3d1cf28d-6e79-43a5-9f58-61a957daad8b",
    "widgets": [
      {
        "type": "type1",
        "id": "a1b2c3d4-e5f6-7890-ghij-klmnopqrstu1",
        "size": {
          "width": 2,
          "height": 1
        },
        "position": {
          "x": 0,
          "y": 0
        }
      },
      {
        "type": "type2",
        "id": "a1b2c3d4-e5f6-7890-ghij-klmnopqrstu2",
        "size": {
          "width": 1,
          "height": 4
        },
        "position": {
          "x": 1,
          "y": 0
        }
      }
    ]
  },
  {
    "name": "Sales Dashboard",
    "id": "9b6c4b12-d4d8-458b-a45f-e4d9f3fa1f10",
    "widgets": [
      {
        "type": "type1",
        "id": "a1b2c3d4-e5f6-7890-ghij-klmnopqrstu3",
        "size": {
          "width": 2,
          "height": 1
        },
        "position": {
          "x": 0,
          "y": 0
        }
      },
      {
        "type": "type2",
        "id": "a1b2c3d4-e5f6-7890-ghij-klmnopqrstu4",
        "size": {
          "width": 1,
          "height": 4
        },
        "position": {
          "x": 1,
          "y": 0
        }
      }
    ]
  },
  {
    "name": "Marketing Dashboard",
    "id": "0f2f6afd-891a-4c3a-8bf3-d8e24bf77c9c",
    "widgets": [
      {
        "type": "type1",
        "id": "a1b2c3d4-e5f6-7890-ghij-klmnopqrstu5",
        "size": {
          "width": 2,
          "height": 1
        },
        "position": {
          "x": 0,
          "y": 0
        }
      },
      {
        "type": "type2",
        "id": "a1b2c3d4-e5f6-7890-ghij-klmnopqrstu6",
        "size": {
          "width": 1,
          "height": 4
        },
        "position": {
          "x": 1,
          "y": 0
        }
      }
    ]
  }
]
```

3. Request to get data for a widget

`GET /api/dashboard/{dashboardId}/widget/{widgetId}/?from={fromDate}&to={toDate}`

```JSON
{
  "aggregateType": "sum",
  "title": "Total Sales",
  "value": 11000,
  "diff": {
    "value": "40%",
    "change": "positive",
    "against": "MoM"
  }
}
```

## FE Store

```JSON
{
  "dashboard": {
    "widgets": [], // Same as API 2 response
    "data": {}, // Same as API 3 response (keyed by id)
  }
}
```
