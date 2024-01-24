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

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "attempted",
    label: "Attempted",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "solved",
    label: "Solved",
    icon: CheckCircledIcon,
  },
];

export const difficulty = [
  {
    label: "Easy",
    value: "easy",
    icon: ArrowDownIcon,
    numVal: 1,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
    numVal: 2,
  },
  {
    label: "Hard",
    value: "hard",
    icon: ArrowUpIcon,
    numVal: 3,
  },
];
