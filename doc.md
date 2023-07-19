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