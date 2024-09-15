interface Widget {
  id: number;
  component: string;
  title: string;
}
interface WidgetProps {
  item: Widget;
}

export type {Widget, WidgetProps}
