import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

// export const labels = [
//   {
//     value: "bug",
//     label: "Bug",
//   },
//   {
//     value: "feature",
//     label: "Feature",
//   },
//   {
//     value: "documentation",
//     label: "Documentation",
//   },
// ];

export const statuses = [
  {
    value: "attempted",
    label: "Attempted",
    icon: QuestionMarkCircledIcon,
    color: "text-yellow-400 font-bold",
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
    color: "text-white/90 font-bold",
  },
  {
    value: "solved",
    label: "Solved",
    icon: CheckCircledIcon,
    color: " text-emerald-500 font-bold",
  },
];

export const difficulty = [
  {
    label: "Easy",
    value: "easy",
    icon: ArrowDownIcon,
    numVal: 1,
    color: " text-green-500 ",
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
    numVal: 2,
    color: " text-yellow-500 ",
  },
  {
    label: "Hard",
    value: "hard",
    icon: ArrowUpIcon,
    numVal: 3,
    color: " text-red-500 ",
  },
];
