

export interface Widget {
  type: 'type1' | 'type2',
  id: string
  size: {
    width: number
    height: number
  },
  position: {
    x: number
    y: number
  }
}

export type WidgetData = {
  type: 'type1',
  aggregateType: string
  title: string
  value: number
  diff: {
    value: string
    change: string
    against: string
  }
}

export interface State {
  dashboard: {
    widgets: Array<Widget>
    data: Record<string, WidgetData>
  }
}

export const initialState: State = {
  dashboard: {
    widgets: [],
    data: {}
  }
}