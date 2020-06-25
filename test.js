{
  "displayInboundCallsIndicators": [
    {
      "now": "2020-06-25T12:11:58.000Z",
      "day_name": "Thursday",
      "week_day": 4,
      "start_date": "2020-06-24",
      "end_date": "2020-06-25",
      "start_time": "[object Object]",
      "end_time": "[object Object]",
      "min_start_time": "07:33:57",
      "max_end_time": "08:08:04",
      "idealResponseTime": 6,
      "shortTimeDef": 10,
      "maxWaitTime": 2,
      "inboundReceived": 6,
      "inboundAbandoned": 0,
      "inboundAttended": 6,
      "inboundShort": 1,
      "inboundBeforeTime": 6,
      "inboundAfterTime": 0,
      "inboundHungAgent": null,
      "inboundServiceLevel": 1,
      "inboundAttentionLevel": 1,
      "inboundAbandonLevel": 0,
      "operation_seconds": 694,
      "operation_time": "00:11:34",
      "wait_seconds": 12,
      "wait_time": "00:00:12",
      "inboundTmo": 115.6667,
      "inboundAsa": 2
    }
  ],
    "displayInboundCurrentCallsIndicators": [
      {
        "now": "2020-06-25T12:11:58.000Z",
        "callsActive": null,
        "callsOnQueue": null,
        "maxWaitTimeOnQue": null,
        "color": "blue"
      }
    ],
      "agentsPlannedTotal": [
        {
          "now": "2020-06-25T12:11:58.000Z",
          "agentsPlannedTotal": 0
        }
      ],
        "agentsConnectedTotal": [
          {
            "now": "2020-06-25T12:11:58.000Z",
            "agentsConnectedTotal": 3,
            "agentsEffectiveTotal": 1,
            "data": "data"
          }
        ],
          "agentsLoggedTotal": [
            {
              "now": "2020-06-25T12:11:58.000Z",
              "agentsLoggedTotal": 17
            }
          ],
            "agentsConnectedByGroup": [
              {
                "now": "2020-06-25T12:11:58.000Z",
                "name": "Asignado",
                "color": "#6f42c1",
                "value": 1
              },
              {
                "now": "2020-06-25T12:11:58.000Z",
                "name": "Auxiliar",
                "color": "#ffc107",
                "value": 1
              },
              {
                "now": "2020-06-25T12:11:58.000Z",
                "name": "Disponible",
                "color": "#28a745",
                "value": 1
              }
            ],
              "agentHistoricResume": [],
                "agentsAuxiliarResume": [
                  {
                    "now": "2020-06-25T12:11:58.000Z",
                    "name": "BaÃ±o",
                    "id": 3,
                    "value": 1,
                    "duration": "00:02:21"
                  }
                ],
                  "agentsAssignationResume": [
                    {
                      "now": "2020-06-25T12:11:58.000Z",
                      "name": "Asignacion Especial(reuniÃ²n,inducciÃ²n,asignacion y feed back))",
                      "id": 6,
                      "value": 1,
                      "duration": "00:31:56"
                    }
                  ],
                    "agentsHistoricBreakResume": [],
                      "agentsHistoricAssignationResume": [],
                        "scale": [
                          {
                            "inv_scale_id": 1,
                            "inv_scale_status": "A",
                            "inv_scale_chk": null,
                            "inv_scale_shortname": "Normal",
                            "inv_scale_name": "Normal",
                            "inv_scale_red": 1,
                            "inv_scale_yellow": 90,
                            "inv_scale_green": 95,
                            "inv_scale_blue": 99
                          }
                        ],
                          "colors": [
                            {
                              "inboundServiceLevel": "blue",
                              "inboundAttentionLevel": "blue",
                              "inboundAbandonLevel": "gray",
                              "callsOnQueue": "white",
                              "callsOnQueueWaitTime": null,
                              "callsOnQueueIdeal": 6
                            }
                          ],
                            "userSelection": {
    "title": "Display de llamadas entrantes",
      "entity_selection": "prueba",
        "options": "\n 2020-06-25 07:00:00\n a\n 2020-06-25 11:00:00",
          "legend": "Test CallCenter",
            "mode": {
      "id": 1,
        "name": "Historic",
          "value": true
    },
    "type": {
      "id": 0,
        "name": "Ejecutado"
    },
    "start_date": "2020-06-24",
      "end_date": "2020-06-25",
        "start_time": {
      "id": 0,
        "value": "07:00:00"
    },
    "end_time": {
      "id": 0,
        "value": "11:00:00"
    },
    "login": {
      "id": 0,
        "name": "username",
          "profile": "profile"
    },
    "auxiliar": [],
      "assignation": [],
        "client": [],
          "queue": [],
            "service": [],
              "campaign": [],
                "supervisor": [],
                  "agent": [],
                    "role": [],
                      "schedule": [],
                        "last_minutes": null,
                          "interval": null,
                            "groupBy": {
      "id": 3,
        "name": "COLA",
          "Inv_id": "inv_queue_id",
            "Inv_name": "inv_queue_name",
              "MainCallEntry_json_id": "JSON_UNQUOTE(JSON_EXTRACT(callentry_operation_json, \"$.queue[0].id\"))",
                "MainCdr_json_id": "JSON_UNQUOTE(JSON_EXTRACT(cdr_operation_json, \"$.queue[0].id\"))",
                  "MainAudit_json_id": "JSON_UNQUOTE(JSON_EXTRACT(audit_operation_json, \"$.queue[0].id\"))"
    },
    "orderBy": { },
    "limitBy": { },
    "status": {
      "id": 0,
        "name": "Activo",
          "value": "A"
    },
    "current_date": {
      "year": 2020,
        "month": 6,
          "day": 25
    },
    "start_time_hour": {
      "hour": 0,
        "minute": 0,
          "second": 0,
            "value": "00:00:00"
    },
    "end_time_hour": {
      "hour": 23,
        "minute": 59,
          "second": 59,
            "value": "23:59:59"
    },
    "views": [
      {
        "id": 1,
        "name": "dashboard",
        "time": 30,
        "option": "actual"
      },
      {
        "id": 1,
        "name": "graph",
        "time": 30
      },
      {
        "id": 1,
        "name": "group",
        "time": 30,
        "option": "COLAS"
      },
      {
        "id": 1,
        "name": "dashboard",
        "time": 30,
        "option": "historic"
      }
    ],
      "creation_date": "2020-06-25",
        "creation_time": "08:08:41"
  }
}

//********************************** */

{
  "displayInboundCallsIndicators": [
    {
      "now": "2020-06-25T12:13:52.000Z",
      "day_name": "Thursday",
      "week_day": 4,
      "start_date": "2020-06-25",
      "end_date": "2020-06-25",
      "start_time": "[object Object]",
      "end_time": "[object Object]",
      "min_start_time": "07:33:57",
      "max_end_time": "08:08:04",
      "idealResponseTime": 6,
      "shortTimeDef": 10,
      "maxWaitTime": 2,
      "inboundReceived": 6,
      "inboundAbandoned": 0,
      "inboundAttended": 6,
      "inboundShort": 1,
      "inboundBeforeTime": 6,
      "inboundAfterTime": 0,
      "inboundHungAgent": null,
      "inboundServiceLevel": 1,
      "inboundAttentionLevel": 1,
      "inboundAbandonLevel": 0,
      "operation_seconds": 694,
      "operation_time": "00:11:34",
      "wait_seconds": 12,
      "wait_time": "00:00:12",
      "inboundTmo": 115.6667,
      "inboundAsa": 2
    }
  ],
    "displayInboundCurrentCallsIndicators": [
      {
        "now": "2020-06-25T12:13:52.000Z",
        "callsActive": null,
        "callsOnQueue": null,
        "maxWaitTimeOnQue": null,
        "color": "blue"
      }
    ],
      "agentsPlannedTotal": [
        {
          "now": "2020-06-25T12:13:52.000Z",
          "agentsPlannedTotal": 0
        }
      ],
        "agentsConnectedTotal": [
          {
            "now": "2020-06-25T12:13:52.000Z",
            "agentsConnectedTotal": 3,
            "agentsEffectiveTotal": 1,
            "data": "data"
          }
        ],
          "agentsLoggedTotal": [
            {
              "now": "2020-06-25T12:13:52.000Z",
              "agentsLoggedTotal": 17
            }
          ],
            "agentsConnectedByGroup": [
              {
                "now": "2020-06-25T12:13:52.000Z",
                "name": "Asignado",
                "color": "#6f42c1",
                "value": 1
              },
              {
                "now": "2020-06-25T12:13:52.000Z",
                "name": "Auxiliar",
                "color": "#ffc107",
                "value": 1
              },
              {
                "now": "2020-06-25T12:13:52.000Z",
                "name": "Disponible",
                "color": "#28a745",
                "value": 1
              }
            ],
              "agentHistoricResume": [],
                "agentsAuxiliarResume": [
                  {
                    "now": "2020-06-25T12:13:52.000Z",
                    "name": "BaÃ±o",
                    "id": 3,
                    "value": 1,
                    "duration": "00:04:16"
                  }
                ],
                  "agentsAssignationResume": [
                    {
                      "now": "2020-06-25T12:13:52.000Z",
                      "name": "Asignacion Especial(reuniÃ²n,inducciÃ²n,asignacion y feed back))",
                      "id": 6,
                      "value": 1,
                      "duration": "00:35:11"
                    }
                  ],
                    "agentsHistoricBreakResume": [],
                      "agentsHistoricAssignationResume": [],
                        "scale": [
                          {
                            "inv_scale_id": 1,
                            "inv_scale_status": "A",
                            "inv_scale_chk": null,
                            "inv_scale_shortname": "Normal",
                            "inv_scale_name": "Normal",
                            "inv_scale_red": 1,
                            "inv_scale_yellow": 90,
                            "inv_scale_green": 95,
                            "inv_scale_blue": 99
                          }
                        ],
                          "colors": [
                            {
                              "inboundServiceLevel": "blue",
                              "inboundAttentionLevel": "blue",
                              "inboundAbandonLevel": "gray",
                              "callsOnQueue": "white",
                              "callsOnQueueWaitTime": null,
                              "callsOnQueueIdeal": 6
                            }
                          ],
                            "userSelection": {
    "title": "Display de llamadas entrantes",
      "entity_selection": "prueba",
        "options": "\n 2020-06-25 07:00:00\n a\n 2020-06-25 11:00:00",
          "legend": "Test CallCenter",
            "mode": {
      "id": 1,
        "name": "Historic",
          "value": true
    },
    "type": {
      "id": 0,
        "name": "Ejecutado"
    },
    "start_date": "2020-06-25",
      "end_date": "2020-06-25",
        "start_time": {
      "id": 0,
        "value": "07:00:00"
    },
    "end_time": {
      "id": 0,
        "value": "11:00:00"
    },
    "login": {
      "id": 0,
        "name": "username",
          "profile": "profile"
    },
    "auxiliar": [],
      "assignation": [],
        "client": [],
          "queue": [],
            "service": [],
              "campaign": [],
                "supervisor": [],
                  "agent": [],
                    "role": [],
                      "schedule": [],
                        "last_minutes": null,
                          "interval": null,
                            "groupBy": {
      "id": 3,
        "name": "COLA",
          "Inv_id": "inv_queue_id",
            "Inv_name": "inv_queue_name",
              "MainCallEntry_json_id": "JSON_UNQUOTE(JSON_EXTRACT(callentry_operation_json, \"$.queue[0].id\"))",
                "MainCdr_json_id": "JSON_UNQUOTE(JSON_EXTRACT(cdr_operation_json, \"$.queue[0].id\"))",
                  "MainAudit_json_id": "JSON_UNQUOTE(JSON_EXTRACT(audit_operation_json, \"$.queue[0].id\"))"
    },
    "orderBy": { },
    "limitBy": { },
    "status": {
      "id": 0,
        "name": "Activo",
          "value": "A"
    },
    "current_date": {
      "year": 2020,
        "month": 6,
          "day": 25
    },
    "start_time_hour": {
      "hour": 0,
        "minute": 0,
          "second": 0,
            "value": "00:00:00"
    },
    "end_time_hour": {
      "hour": 23,
        "minute": 59,
          "second": 59,
            "value": "23:59:59"
    },
    "views": [
      {
        "id": 1,
        "name": "dashboard",
        "time": 30,
        "option": "actual"
      },
      {
        "id": 1,
        "name": "graph",
        "time": 30
      },
      {
        "id": 1,
        "name": "group",
        "time": 30,
        "option": "COLAS"
      },
      {
        "id": 1,
        "name": "dashboard",
        "time": 30,
        "option": "historic"
      }
    ],
      "creation_date": "2020-06-25",
        "creation_time": "08:08:41"
  }
}