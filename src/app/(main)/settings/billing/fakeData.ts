export const tariffs = [
  {
    id: "1",
    name: "Free",
    isCurrent: true,
    isFree: true,
    description: "Good for testing purposes",
    options: [
      {
        id: "1",
        name: "Unlimited websites",
      },
      {
        id: "2",
        name: "1 widget",
      },
      {
        id: "3",
        name: "200 views",
        hasTooltip: true,
        tooltipText: "Lorem ipsum dolores polores",
      },
      {
        id: "4",
        name: "Only bug fixes",
      },
      {
        id: "5",
        name: "WidgetJoy Branding",
      },
    ],
  },
  {
    id: "2",
    name: "Starter",
    isCurrent: false,
    isFree: false,
    price: "$8",
    description: "Best for low-traffic websites",
    options: [
      {
        id: "1",
        name: "Unlimited websites",
      },
      {
        id: "2",
        name: "Unlimited widgets",
      },
      {
        id: "3",
        name: "5,000 views",
        hasTooltip: true,
        tooltipText: "Lorem ipsum dolores polores",
      },
      {
        id: "4",
        name: "Basic support",
      },
    ],
  },
  {
    id: "3",
    name: "Growth",
    isCurrent: false,
    isFree: false,
    price: "$24",
    description: "Best for low-traffic websites",
    options: [
      {
        id: "1",
        name: "Unlimited websites",
      },
      {
        id: "2",
        name: "Unlimited widgets",
      },
      {
        id: "3",
        name: "5,000 views",
        hasTooltip: true,
        tooltipText: "Lorem ipsum dolores polores",
      },
      {
        id: "4",
        name: "Priority support",
      },
    ],
  },
];
