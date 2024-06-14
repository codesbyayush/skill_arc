export type problems = {
  id: string;
  title: string;
  problemStatement: string;
  examples: {
    input?: string,
    output?: string,
    explanation?: string,
  }[];
  constraints: string[];
};



export const allProblems = {
  problems: [
    {
      id: "1",
      title: "Two Sum",
      problemStatement:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. \nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.",
      examples: [
        {
          input: " nums = [2,7,11,15], target = 9",
          output: " [0,1]",
          explanation: " Because nums[0] + nums[1] == 9, we return [0, 1].",
        },
        {
          input: " nums = [3,2,4], target = 6",
          output: " [1,2]",
        },
        {
          input: " nums = [3,3], target = 6",
          output: " [0,1]",
        },
      ],
      constraints: [
        "2 <= nums.length <= 104-109 <= nums[i] <= 109-109 <= target <= 109Only one valid answer exists.",
      ],
    },
    {
      id: "7",
      title: "Reverse Integer",
      problemStatement:
        "Given a signed 32-bit integer x, return x with its digits reversed.\n If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.\nAssume the environment does not allow you to store 64-bit integers (signed or unsigned).",
      examples: [
        {
          input: " x = 123",
          output: " 321",
        },
        {
          input: " x = -123",
          output: " -321",
        },
        {
          input: " x = 120",
          output: " 21",
        },
        {
          input: " x = 0",
          output: " 0",
        },
      ],
      constraints: ["-231 <= x <= 231 - 1"],
    },
    {
      id: "35",
      title: "Search Insert Position",
      problemStatement:
        "Given a sorted array of distinct integers and a target value, return the index if the target is found.\n If not, return the index where it would be if it were inserted in order.\nYou must write an algorithm with O(log n) runtime complexity.",
      examples: [
        {
          input: " nums = [1,3,5,6], target = 5",
          output: " 2",
        },
        {
          input: " nums = [1,3,5,6], target = 2",
          output: " 1",
        },
        {
          input: " nums = [1,3,5,6], target = 7",
          output: " 4",
        },
        {
          input: " nums = [1,3,5,6], target = 0",
          output: " 0",
        },
        {
          input: " nums = [1], target = 0",
          output: " 0",
        },
      ],
      constraints: [
        "1 <= nums. length <= 104-104 <= nums[i] <= 104nums contains distinct values sorted in ascending order.-104 <= target <= 104",
      ],
    },
    {
      id: "485",
      title: "Max Consecutive Ones",
      problemStatement:
        "Given a binary array nums, return the maximum number of consecutive 1's in the array.",
      examples: [
        {
          input: " nums = [1,1,0,1,1,1]",
          output: " 3",
          explanation:
            "The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.",
        },
        {
          input: " nums = [1,0,1,1,0,1]",
          output: " 2",
        },
        {
          input: "",
        },
      ],
      constraints: ["1 <= nums. length <= 105nums[i] is either 0 or 1."],
    },
    {
      id: "1498",
      title: "Number of Subsequences That Satisfy the Given Sum Condition",
      problemStatement:
        "Given an array of integers nums and an integer target.\nReturn the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target.\n Since the answer may be too large, return it modulo 109 + 7.",
      examples: [
        {
          input: " nums = [3,5,6,7], target = 9",
          output: " 4",
          explanation: " There are 4 subsequences that satisfy the condition.",
        },
        {
          input: " Min value + max value <= target (3 + 3 <= 9)",
          output: "-> (3 + 5 <= 9)",
        },
        {
          input: " (3 + 6 <= 9)",
          output: " (3 + 6 <= 9)",
        },
        {
          input: " nums = [3,3,6,8], target = 10",
          output: " 6",
          explanation:
            "There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).",
        },
        {
          input:
            "[3] , [3,3], [3,6] , [3,6] , [3,3,6]Input: nums = [2,3,3,4,6,7], target = 12",
          output: " 61",
          explanation:
            "There are 63 non-empty subsequences, two of them don't satisfy the condition ([6,7], [7]).",
        },
        {
          input: " of valid subsequences (63 - 2 = 61).",
          output: " nums = [5,2,4,1,7,6,8], target = 16",
        },
        {
          input: "127",
          output:
            "ation: All non-empty subset satisfy the condition (2^7 - 1) = 127",
        },
      ],
      constraints: [
        "1 <= nums. length <= 1051 <= nums[i] <= 1061 <= target <= 106",
      ],
    },
    {
      id: "1503",
      title: "Last Moment Before All Ants Fall Out of a Plank",
      problemStatement:
        "We have a wooden plank of the length n units.\n Some ants are walking on the plank, each ant moves with speed 1 unit per second.\n Some of the ants move to the left, the other move to the right.\nWhen two ants moving in two different directions meet at some point, they change their directions and continue moving again.\n Assume changing directions doesn't take any additional time.\nWhen an ant reaches one end of the plank at a time t, it falls out of the plank imediately.\nGiven an integer n and two integer arrays left and right, the positions of the ants moving to the left and the right.\n Return the moment when the last ant(s) fall out of the plank.",
      examples: [
        {
          input: " n = 4, left = [4,3], right = [0,1]",
          output: " 4",
          explanation: " In the image above:",
        },
        {
          input: "nt at index 0 is named A and going to the right.",
          output: "nt at index 1 is named B and going to the right.",
        },
        {
          input: "nt at index 3 is named C and going to the left.",
          output: "nt at index 4 is named D and going to the left.",
        },
        {
          input:
            "hat the last moment when an ant was on the plank is t = 4 second, after that it falls imediately out of the plank. (i. e. We can say that at t = 4. 0000000001, there is no ants on the plank).",
          output: " n = 7, left = [], right = [0,1,2,3,4,5,6,7]",
        },
        {
          input: "7",
          output:
            "ation: All ants are going to the right, the ant at index 0 needs 7 seconds to fall.",
        },
        {
          input: " n = 7, left = [0,1,2,3,4,5,6,7], right = []",
          output: " 7",
          explanation:
            "All ants are going to the left, the ant at index 7 needs 7 seconds to fall.",
        },
        {
          input: " n = 9, left = [5], right = [4]",
          output: " 5",
          explanation:
            "At t = 1 second, both ants will be at the same intial position but with different direction.",
        },
        {
          input: " n = 6, left = [6], right = [0]",
          output: " 6",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "1 <= n <= 10^40 <= left. length <= n + 10 <= left[i] <= n0 <= right. length <= n + 10 <= right[i] <= n1 <= left. length + right. length <= n + 1All values of left and right are unique",
        " and each value can appear only in one of the two arrays.",
      ],
    },
    {
      id: "1508",
      title: "Range Sum of Sorted Subarray Sums",
      problemStatement:
        "You are given the array nums consisting of n positive integers.\n You computed the sum of all non-empty continuous subarrays from the array and then sorted them in non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.\nReturn the sum of the numbers from index left to index right (indexed from 1), inclusive, in the new array.\n Since the answer can be a huge number return it modulo 109 + 7.",
      examples: [
        {
          input: " nums = [1,2,3,4], n = 4, left = 1, right = 5",
          output: " 13 ",
          explanation:
            "All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. After sorting them in non-decreasing order we have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 1 to ri = 5 is 1 + 2 + 3 + 3 + 4 = 13. ",
        },
        {
          input: " nums = [1,2,3,4], n = 4, left = 3, right = 4",
          output: " 6",
          explanation:
            "The given array is the same as example 1. We have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 3 to ri = 4 is 3 + 3 = 6.",
        },
        {
          input: " nums = [1,2,3,4], n = 4, left = 1, right = 10",
          output: " 50",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "n == nums. length1 <= nums. length <= 10001 <= nums[i] <= 1001 <= left <= right <= n * (n + 1) / 2",
      ],
    },
    {
      id: "1509",
      title:
        "Minimum Difference Between Largest and Smallest Value in Three Moves",
      problemStatement:
        "Given an array nums, you are allowed to choose one element of nums and change it by any value in one move.\nReturn the minimum difference between the largest and smallest value of nums after perfoming at most 3 moves.",
      examples: [
        {
          input: " nums = [5,3,2,4]",
          output: " 0",
          explanation: " Change the array [5,3,2,4] to [2,2,2,2].",
        },
        {
          input:
            "fference between the maximum and minimum is 2-2 = 0. Input: nums = [1,5,0,10,14]",
          output: " 1",
          explanation: " Change the array [1,5,0,10,14] to [1,1,0,1,1]. ",
        },
        {
          input: "fference between the maximum and minimum is 1-0 = 1.",
          output: " nums = [6,6,0,1,1,4,6]",
        },
        {
          input: "2",
          output: " nums = [1,5,6,14,15]",
        },
      ],
      constraints: ["1 <= nums. length <= 10^5-10^9 <= nums[i] <= 10^9"],
    },
    {
      id: "1513",
      title: "Number of Substrings With Only 1s",
      problemStatement:
        "Given a binary string s (a string consisting only of '0' and '1's).\nReturn the number of substrings with all characters 1's.\nSince the answer may be too large, return it modulo 10^9 + 7.",
      examples: [
        {
          input: ' s = "0110111"',
          output: " 9",
          explanation:
            "There are 9 substring in total with only 1's characters.",
        },
        {
          input: " 5 times.",
          output: "> 3 times.",
        },
        {
          input: '-> 1 time. Input: s = "101"',
          output: " 2",
          explanation: ': Substring "1" is shown 2 times in s.',
        },
        {
          input: ' s = "111111"',
          output: " 21",
          explanation: " Each substring contains only 1's characters.",
        },
        {
          input: ' s = "000"',
          output: " 0",
        },
      ],
      constraints: ["s[i] == '0' or s[i] == '1'1 <= s. length <= 10^5"],
    },
    {
      id: "1514",
      title: "Path with Maximum Probability",
      problemStatement:
        "You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list where edges[i] = [a, b] is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge succProb[i].\nGiven two nodes start and end, find the path with the maximum probability of success to go from start to end and return its success probability.\nIf there is no path from start to end, return 0.\n Your answer will be accepted if it differs from the correct answer by at most 1e-5.",
      examples: [
        {
          input:
            " n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0. 5,0. 5,0. 2], start = 0, end = 2",
          output: " 0. 25000",
          explanation:
            "There are two paths from start to end, one having a probability of success = 0. 2 and the other has 0. 5 * 0. 5 = 0. 25.",
        },
        {
          input:
            " n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0. 5,0. 5,0. 3], start = 0, end = 2",
          output: " 0. 30000",
        },
        {
          input:
            " n = 3, edges = [[0,1]], succProb = [0. 5], start = 0, end = 2",
          output: " 0. 00000",
          explanation: " There is no path between 0 and 2.",
        },
      ],
      constraints: [
        "2 <= n <= 10^40 <= start",
        " end < nstart != end0 <= a",
        " b < na != b0 <= succProb. length == edges. length <= 2*10^40 <= succProb[i] <= 1There is at most one edge between every two nodes.",
      ],
    },
    {
      id: "1519",
      title: "Number of Nodes in the Sub-Tree With the Same Label",
      problemStatement:
        "Given a tree (i.\ne.\n a connected, undirected graph that has no cycles) consisting of n nodes numbered from 0 to n - 1 and exactly n - 1 edges.\n The root of the tree is the node 0, and each node of the tree has a label which is a lower-case character given in the string labels (i.\ne.\n The node with the number i has the label labels[i]).\nThe edges array is given on the form edges[i] = [ai, bi], which means there is an edge between nodes ai and bi in the tree.\nReturn an array of size n where ans[i] is the number of nodes in the subtree of the ith node which have the same label as node i.\nA subtree of a tree T is the tree consisting of a node in T and all of its descendant nodes.",
      examples: [
        {
          input:
            ' n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], labels = "abaedcd"',
          output: " [2,1,1,1,1,1,1]",
          explanation:
            "Node 0 has label 'a' and its sub-tree has node 2 with label 'a' as well, thus the answer is 2. Notice that any node is part of its sub-tree.",
        },
        {
          input:
            " has a label 'b'. The sub-tree of node 1 contains nodes 1,4 and 5, as nodes 4 and 5 have different labels than node 1, the answer is just 1 (the node itself).",
          output: ' n = 4, edges = [[0,1],[1,2],[0,3]], labels = "bbbb"',
        },
        {
          input: "[4,2,1,1]",
          output:
            "ation: The sub-tree of node 2 contains only node 2, so the answer is 1.",
        },
        {
          input: "b-tree of node 3 contains only node 3, so the answer is 1.",
          output:
            "b-tree of node 1 contains nodes 1 and 2, both have label 'b', thus the answer is 2.",
        },
        {
          input:
            "b-tree of node 0 contains nodes 0, 1, 2 and 3, all with label 'b', thus the answer is 4.",
          output: ' n = 5, edges = [[0,1],[0,2],[1,3],[0,4]], labels = "aabab"',
        },
        {
          input: "[3,2,1,1,1]",
          output:
            ' n = 6, edges = [[0,1],[0,2],[1,3],[3,4],[4,5]], labels = "cbabaa"',
        },
        {
          input: "[1,2,1,1,2,1]",
          output:
            ' n = 7, edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]], labels = "aaabaaa"',
        },
        {
          input: "[6,5,4,1,3,2,1]",
        },
      ],
      constraints: [
        "1 <= n <= 10^5edges. length == n - 1edges[i]. length == 20 <= ai",
        " bi < nai != bilabels. length == nlabels is consisting of only of lower-case English letters.",
      ],
    },
    {
      id: "1524",
      title: "Number of Sub-arrays With Odd Sum",
      problemStatement:
        "Given an array of integers arr, return the number of subarrays with an odd sum.\nSince the answer can be very large, return it modulo 109 + 7.",
      examples: [
        {
          input: " arr = [1,3,5]",
          output: " 4",
          explanation: " All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]",
        },
        {
          input: "b-arrays sum are [1,4,9,3,8,5].",
          output: "ms are [1,9,3,5] so the answer is 4.",
        },
        {
          input: " arr = [2,4,6]",
          output: " 0",
          explanation: " All subarrays are [[2],[2,4],[2,4,6],[4],[4,6],[6]]",
        },
        {
          input: "b-arrays sum are [2,6,12,4,10,6].",
          output: "b-arrays have even sum and the answer is 0.",
        },
        {
          input: " arr = [1,2,3,4,5,6,7]",
          output: " 16",
        },
      ],
      constraints: ["1 <= arr. length <= 1051 <= arr[i] <= 100"],
    },
    {
      id: "1525",
      title: "Number of Good Ways to Split a String",
      problemStatement:
        "You are given a string s, a split is called good if you can split s into 2 non-empty strings p and q where its concatenation is equal to s and the number of distinct letters in p and q are the same.\nReturn the number of good splits you can make in s.",
      examples: [
        {
          input: ' s = "aacaba"',
          output: " 2",
          explanation:
            ': There are 5 ways to split "aacaba" and 2 of them are good. ',
        },
        {
          input:
            '"acaba") Left string and right string contains 1 and 3 different letters respectively.',
          output:
            ' "caba") Left string and right string contains 1 and 3 different letters respectively.',
        },
        {
          input:
            ', "aba") Left string and right string contains 2 and 2 different letters respectively (good split).',
          output:
            '", "ba") Left string and right string contains 2 and 2 different letters respectively (good split).',
        },
        {
          input:
            'b", "a") Left string and right string contains 3 and 1 different letters respectively.',
          output: ' s = "abcd"',
        },
        {
          input: "1",
          output: 'ation: Split the string as follows ("ab", "cd").',
        },
        {
          input: ' s = "aaaaa"',
          output: " 4",
          explanation:
            ': All possible splits are good. Input: s = "acbadbaada"',
        },
        {
          input: "2",
        },
      ],
      constraints: [
        "s contains only lowercase English letters. 1 <= s. length <= 10^5",
      ],
    },
    {
      id: "492",
      title: "Construct the Rectangle",
      problemStatement:
        "A web developer needs to know how to design a web page's size.\n So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.",
      examples: [
        {
          input: " area = 4",
          output: " [2,2]",
          explanation:
            "The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1]. ",
        },
        {
          input:
            "cording to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.",
          output: " area = 37",
        },
        {
          input: "[37,1]",
          output: " area = 122122",
        },
        {
          input: "[427,286]",
        },
      ],
      constraints: ["1 <= area <= 107"],
    },
    {
      id: "1529",
      title: "Bulb Switcher IV",
      problemStatement:
        "There is a room with n bulbs, numbered from 0 to n - 1, arranged in a row from left to right.\n Initially, all the bulbs are turned off.\nYour task is to obtain the configuration represented by target where target[i] is '1' if the ith bulb is turned on and is '0' if it is turned off.\nYou have a switch to flip the state of the bulb, a flip operation is defined as follows:When any bulb is flipped it means that if it is '0' it changes to '1' and if it is '1' it changes to '0'.\nReturn the minimum number of flips required to form target.",
      examples: [
        {
          input: ' target = "10111"',
          output: " 3",
          explanation: ': Initial configuration "00000".',
        },
        {
          input: 'rom the third bulb:  "00000" -> "00111"',
          output: 'rom the first bulb:  "00111" -> "11000"',
        },
        {
          input: 'rom the second bulb:  "11000" -> "10111"',
          output:
            'd at least 3 flip operations to form target. Input: target = "101"',
        },
        {
          input: "3",
          output: 'ation: "000" -> "111" -> "100" -> "101".',
        },
        {
          input: ' target = "00000"',
          output: " 0",
        },
        {
          input: ' target = "001011101"',
          output: " 5",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "Choose any bulb (index i) of your current configuration. Flip each bulb from index i to index n - 1. 1 <= target. length <= 105target[i] is either '0' or '1'.",
      ],
    },
    {
      id: "1530",
      title: "Number of Good Leaf Nodes Pairs",
      problemStatement:
        "Given the root of a binary tree and an integer distance.\n A pair of two different leaf nodes of a binary tree is said to be good if the length of the shortest path between them is less than or equal to distance.\nReturn the number of good leaf node pairs in the tree.",
      examples: [
        {
          input: " root = [1,2,3,null,4], distance = 3",
          output: " 1",
          explanation:
            "The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.",
        },
        {
          input: " root = [1,2,3,4,5,6,7], distance = 3",
          output: " 2",
          explanation:
            "The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because the length of ther shortest path between them is 4.",
        },
        {
          input:
            " root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3",
          output: " 1",
          explanation: " The only good pair is [2,5].",
        },
        {
          input: " root = [100], distance = 1",
          output: " 0",
        },
        {
          input: " root = [1,1,1], distance = 2",
          output: " 1",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "The number of nodes in the tree is in the range [1",
        " 2^10]. Each node's value is between [1",
        " 100]. 1 <= distance <= 10",
      ],
    },
    {
      id: "1535",
      title: "Find the Winner of an Array Game",
      problemStatement:
        "Given an integer array arr of distinct integers and an integer k.\nA game will be played between the first two elements of the array (i.\ne.\n arr[0] and arr[1]).\n In each round of the game, we compare arr[0] with arr[1], the larger integer wins and remains at position 0 and the smaller integer moves to the end of the array.\n The game ends when an integer wins k consecutive rounds.\nReturn the integer which will win the game.\nIt is guaranteed that there will be a winner of the game.",
      examples: [
        {
          input: " arr = [2,1,3,5,4,6,7], k = 2",
          output: " 5",
          explanation: " Let's see the rounds of the game:",
        },
        {
          input: "|       arr       | winner | win_count",
          output: "| [2,1,3,5,4,6,7] | 2      | 1",
        },
        {
          input: "| [2,3,5,4,6,7,1] | 3      | 1",
          output: "| [3,5,4,6,7,1,2] | 5      | 1",
        },
        {
          input: "| [5,4,6,7,1,2,3] | 5      | 2",
          output:
            "can see that 4 rounds will be played and 5 is the winner because it wins 2 consecutive games.",
        },
        {
          input: " arr = [3,2,1], k = 10",
          output: " 3",
          explanation: " 3 will win the first 10 rounds consecutively.",
        },
        {
          input: " arr = [1,9,8,2,3,7,6,4,5], k = 7",
          output: " 9",
        },
        {
          input: " arr = [1,11,22,33,44,55,66,77,88,99], k = 1000000000",
          output: " 99",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "2 <= arr. length <= 10^51 <= arr[i] <= 10^6arr contains distinct integers. 1 <= k <= 10^9",
      ],
    },
    {
      id: "1536",
      title: "Minimum Swaps to Arrange a Binary Grid",
      problemStatement:
        "Given an n x n binary grid, in one step you can choose two adjacent rows of the grid and swap them.\nA grid is said to be valid if all the cells above the main diagonal are zeros.\nReturn the minimum number of steps needed to make the grid valid, or -1 if the grid cannot be valid.\nThe main diagonal of a grid is the diagonal that starts at cell (1, 1) and ends at cell (n, n).",
      examples: [
        {
          input: " grid = [[0,0,1],[1,1,0],[1,0,0]]",
          output: " 3",
        },
        {
          input: " grid = [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]",
          output: " -1",
          explanation:
            "All rows are similar, swaps have no effect on the grid.",
        },
        {
          input: " grid = [[1,0,0],[1,1,0],[1,1,1]]",
          output: " 0",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "n == grid. lengthn == grid[i]. length1 <= n <= 200grid[i][j] is 0 or 1",
      ],
    },
    {
      id: "1540",
      title: "Can Convert String in K Moves",
      problemStatement:
        "Given two strings s and t, your goal is to convert s into t in k moves or less.\nDuring the ith (1 <= i <= k) move you can:Shifting a character means replacing it by the next letter in the alphabet (wrapping around so that 'z' becomes 'a').\n Shifting a character by i means applying the shift operations i times.\nRemember that any index j can be picked at most once.\nReturn true if it's possible to convert s into t in no more than k moves, otherwise return false.",
      examples: [
        {
          input: ' s = "input", t = "ouput", k = 9',
          output: " true",
          explanation:
            "In the 6th move, we shift 'i' 6 times to get 'o'. And in the 7th move we shift 'n' to get 'u'.",
        },
        {
          input: ' s = "abc", t = "bcd", k = 10',
          output: " false",
          explanation:
            "We need to shift each character in s one time to convert it into t. We can shift 'a' to 'b' during the 1st move. However, there is no way to shift the other characters in the remaining moves to obtain t from s.",
        },
        {
          input: ' s = "aab", t = "bbb", k = 27',
          output: " true",
          explanation:
            "In the 1st move, we shift the first 'a' 1 time to get 'b'. In the 27th move, we shift the second 'a' 27 times to get 'b'.",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "Choose any index j (1-indexed) from s",
        " such that 1 <= j <= s. length and j has not been chosen in any previous move",
        " and shift the character at that index i times. Do nothing. 1 <= s. length",
        " t. length <= 10^50 <= k <= 10^9s",
        " t contain only lowercase English letters.",
      ],
    },
    {
      id: "1541",
      title: "Minimum Insertions to Balance a Parentheses String",
      problemStatement:
        "Given a parentheses string s containing only the characters '(' and ')'.\n A parentheses string is balanced if:In other words, we treat '(' as openning parenthesis and '))' as closing parenthesis.\nFor example, \"())\", \"())(())))\" and \"(())())))\" are balanced, \")()\", \"()))\" and \"(()))\" are not balanced.\nYou can insert the characters '(' and ')' at any position of the string to balance it if needed.\nReturn the minimum number of insertions needed to make s balanced.",
      examples: [
        {
          input: ' s = "(()))"',
          output: " 1",
          explanation:
            "The second '(' has two matching '))', but the first '(' has only ')' matching. We need to to add one more ')' at the end of the string to be \"(())))\" which is balanced.",
        },
        {
          input: ' s = "())"',
          output: " 0",
          explanation: " The string is already balanced.",
        },
        {
          input: ' s = "))())("',
          output: " 3",
          explanation:
            "Add '(' to match the first '))', Add '))' to match the last '('.",
        },
        {
          input: ' s = "(((((("',
          output: " 12",
          explanation: " Add 12 ')' to balance the string.",
        },
        {
          input: ' s = ")))))))"',
          output: " 5",
          explanation:
            "Add 4 '(' at the beginning of the string and one ')' at the end. The string becomes \"(((())))))))\".",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "Any left parenthesis '(' must have a corresponding two consecutive right parenthesis '))'. Left parenthesis '(' must go before the corresponding two consecutive right parenthesis '))'. 1 <= s. length <= 10^5s consists of '(' and ')' only.",
      ],
    },
    {
      id: "1545",
      title: "Find Kth Bit in Nth Binary String",
      problemStatement:
        "Given two positive integers n and k, the binary string  Sn is formed as follows:Where + denotes the concatenation operation, reverse(x) returns the reversed string x, and invert(x) inverts all the bits in x (0 changes to 1 and 1 changes to 0).\nFor example, the first 4 strings in the above sequence are:Return the kth bit in Sn.\n It is guaranteed that k is valid for the given n.",
      examples: [
        {
          input: " n = 3, k = 1",
          output: ' "0"',
          explanation: ': S3 is "0111001". The first bit is "0".',
        },
        {
          input: " n = 4, k = 11",
          output: ' "1"',
          explanation: ': S4 is "011100110110001". The 11th bit is "1".',
        },
        {
          input: " n = 1, k = 1",
          output: ' "0"',
        },
        {
          input: " n = 2, k = 3",
          output: ' "1"',
        },
        {
          input: "",
        },
      ],
      constraints: [
        'S1 = "0"Si = Si-1 + "1" + reverse(invert(Si-1)) for i > 1S1 = "0"S2 = "011"S3 = "0111001"S4 = "011100110110001"1 <= n <= 201 <= k <= 2n - 1',
      ],
    },
    {
      id: "1546",
      title:
        "Maximum Number of Non-Overlapping Subarrays With Sum Equals Target",
      problemStatement:
        "Given an array nums and an integer target.\nReturn the maximum number of non-empty non-overlapping subarrays such that the sum of values in each subarray is equal to target.",
      examples: [
        {
          input: " nums = [1,1,1,1,1], target = 2",
          output: " 2",
          explanation:
            "There are 2 non-overlapping subarrays [1,1,1,1,1] with sum equals to target(2).",
        },
        {
          input: " nums = [-1,3,5,1,4,2,-9], target = 6",
          output: " 2",
          explanation: " There are 3 subarrays with sum equal to 6.",
        },
        {
          input:
            ", [4,2], [3,5,1,4,2,-9]) but only the first 2 are non-overlapping. Input: nums = [-2,6,6,3,5,4,1,2,8], target = 10",
          output: " 3",
        },
        {
          input: " nums = [0,0,0], target = 0",
          output: " 3",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "1 <= nums. length <= 10^5-10^4 <= nums[i] <= 10^40 <= target <= 10^6",
      ],
    },
    {
      id: "1551",
      title: "Minimum Operations to Make Array Equal",
      problemStatement:
        "You have an array arr of length n where arr[i] = (2 * i) + 1 for all valid values of i (i.\ne.\n 0 <= i < n).\nIn one operation, you can select two indices x and y where 0 <= x, y < n and subtract 1 from arr[x] and add 1 to arr[y] (i.\ne.\n perform arr[x] -=1 and arr[y] += 1).\n The goal is to make all the elements of the array equal.\n It is guaranteed that all the elements of the array can be made equal using some operations.\nGiven an integer n, the length of the array.\n Return the minimum number of operations needed to make all the elements of arr equal.",
      examples: [
        {
          input: " n = 3",
          output: " 2",
          explanation: " arr = [1, 3, 5]",
        },
        {
          input:
            "operation choose x = 2 and y = 0, this leads arr to be [2, 3, 4]",
          output:
            " second operation choose x = 2 and y = 0 again, thus arr = [3, 3, 3].",
        },
        {
          input: " n = 6",
          output: " 9",
        },
        {
          input: "",
        },
      ],
      constraints: ["1 <= n <= 10^4"],
    },
    {
      id: "1552",
      title: "Magnetic Force Between Two Balls",
      problemStatement:
        "In universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket.\n Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.\nRick stated that magnetic force between two different balls at positions x and y is |x - y|.\nGiven the integer array position and the integer m.\n Return the required force.",
      examples: [
        {
          input: " position = [1,2,3,4,7], m = 3",
          output: " 3",
          explanation:
            "Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.",
        },
        {
          input: " position = [5,4,3,2,1,1000000000], m = 2",
          output: " 999999999",
          explanation: " We can use baskets 1 and 1000000000.",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "n == position. length2 <= n <= 10^51 <= position[i] <= 10^9All integers in position are distinct. 2 <= m <= position. length",
      ],
    },
    {
      id: "495",
      title: "Teemo Attacking",
      problemStatement:
        "Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds.\n More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1].\n If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.\nYou are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.\nReturn the total number of seconds that Ashe is poisoned.",
      examples: [
        {
          input: " timeSeries = [1,4], duration = 2",
          output: " 4",
          explanation: " Teemo's attacks on Ashe go as follows:",
        },
        {
          input:
            "econd 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.",
          output:
            "econd 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.",
        },
        {
          input:
            "s poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.",
          output: " timeSeries = [1,2], duration = 2",
        },
        {
          input: "3",
          output: "ation: Teemo's attacks on Ashe go as follows:",
        },
        {
          input:
            "econd 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.",
          output:
            "econd 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.",
        },
        {
          input:
            "s poisoned for seconds 1, 2, and 3, which is 3 seconds in total.",
        },
      ],
      constraints: [
        "1 <= timeSeries. length <= 1040 <= timeSeries[i]",
        " duration <= 107timeSeries is sorted in non-decreasing order.",
      ],
    },
    {
      id: "1557",
      title: "Minimum Number of Vertices to Reach All Nodes",
      problemStatement:
        "Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.\nFind the smallest set of vertices from which all nodes in the graph are reachable.\n It's guaranteed that a unique solution exists.\nNotice that you can return the vertices in any order.",
      examples: [
        {
          input: " n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]",
          output: " [0,3]",
          explanation:
            "It's not possible to reach all the nodes from a single vertex. From 0 we can reach [0,1,2,5]. From 3 we can reach [3,4,2,5]. So we output [0,3]. Input: n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]",
        },
        {
          input: "[0,2,3]",
          output:
            "ation: Notice that vertices 0, 3 and 2 are not reachable from any other node, so we must include them. Also any of these vertices can reach nodes 1 and 4.",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "2 <= n <= 10^51 <= edges. length <= min(10^5",
        " n * (n - 1) / 2)edges[i]. length == 20 <= fromi",
        " toi < nAll pairs (fromi",
        " toi) are distinct.",
      ],
    },
    {
      id: "1558",
      title: "Minimum Numbers of Function Calls to Make Target Array",
      problemStatement:
        "Your task is to form an integer array nums from an initial array of zeros arr that is the same size as nums.\nReturn the minimum number of function calls to make nums from arr.\nThe answer is guaranteed to fit in a 32-bit signed integer.",
      examples: [
        {
          input: " nums = [1,5]",
          output: " 5",
          explanation:
            "Increment by 1 (second element): [0, 0] to get [0, 1] (1 operation).",
        },
        {
          input:
            " all the elements: [0, 1] -> [0, 2] -> [0, 4] (2 operations).",
          output:
            "ent by 1 (both elements)  [0, 4] -> [1, 4] -> [1, 5] (2 operations).",
        },
        {
          input: "of operations: 1 + 2 + 2 = 5.",
          output: " nums = [2,2]",
        },
        {
          input: "3",
          output:
            "ation: Increment by 1 (both elements) [0, 0] -> [0, 1] -> [1, 1] (2 operations).",
        },
        {
          input: " all the elements: [1, 1] -> [2, 2] (1 operation).",
          output: "of operations: 2 + 1 = 3.",
        },
        {
          input: " nums = [4,2,5]",
          output: " 6",
          explanation:
            "(initial)[0,0,0] -> [1,0,0] -> [1,0,1] -> [2,0,2] -> [2,1,2] -> [4,2,4] -> [4,2,5](nums).",
        },
        {
          input: " nums = [3,2,2,4]",
          output: " 7",
        },
        {
          input: " nums = [2,4,8,16]",
          output: " 8",
        },
        {
          input: "",
        },
      ],
      constraints: ["1 <= nums. length <= 10^50 <= nums[i] <= 10^9"],
    },
    {
      id: "1561",
      title: "Maximum Number of Coins You Can Get",
      problemStatement:
        "There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:Given an array of integers piles where piles[i] is the number of coins in the ith pile.\nReturn the maximum number of coins which you can have.",
      examples: [
        {
          input: " piles = [2,4,1,2,7,8]",
          output: " 9",
          explanation:
            "Choose the triplet (2, 7, 8), Alice Pick the pile with 8 coins, you the pile with 7 coins and Bob the last one.",
        },
        {
          input:
            " the triplet (1, 2, 4), Alice Pick the pile with 4 coins, you the pile with 2 coins and Bob the last one.",
          output: "ximum number of coins which you can have are: 7 + 2 = 9.",
        },
        {
          input:
            " other hand if we choose this arrangement (1, 2, 8), (2, 4, 7) you only get 2 + 4 = 6 coins which is not optimal.",
          output: " piles = [2,4,5]",
        },
        {
          input: "4",
          output: " piles = [9,8,7,6,5,1,2,3,4]",
        },
        {
          input: "18",
        },
      ],
      constraints: [
        "In each step",
        " you will choose any 3 piles of coins (not necessarily consecutive). Of your choice",
        " Alice will pick the pile with the maximum number of coins. You will pick the next pile with maximum number of coins. Your friend Bob will pick the last pile. Repeat until there are no more piles of coins. 3 <= piles. length <= 10^5piles. length % 3 == 01 <= piles[i] <= 10^4",
      ],
    },
    {
      id: "1562",
      title: "Find Latest Group of Size M",
      problemStatement:
        "Given an array arr that represents a permutation of numbers from 1 to n.\n You have a binary string of size n that initially has all its bits set to zero.\nAt each step i (assuming both the binary string and arr are 1-indexed) from 1 to n, the bit at position arr[i] is set to 1.\n You are given an integer m and you need to find the latest step at which there exists a group of ones of length m.\n A group of ones is a contiguous substring of 1s such that it cannot be extended in either direction.\nReturn the latest step at which there exists a group of ones of length exactly m.\n If no such group exists, return -1.",
      examples: [
        {
          input: " arr = [3,5,1,2,4], m = 1",
          output: " 4",
          explanation: "",
        },
        {
          input: ': "00100", groups: ["1"]',
          output: ' "00101", groups: ["1", "1"]',
        },
        {
          input: ': "10101", groups: ["1", "1", "1"]',
          output: ' "11101", groups: ["111", "1"]',
        },
        {
          input: ': "11111", groups: ["11111"]',
          output:
            "test step at which there exists a group of size 1 is step 4. Input: arr = [3,1,5,4,2], m = 2",
        },
        {
          input: "-1",
          output: "ation:",
        },
        {
          input: ': "00100", groups: ["1"]',
          output: ' "10100", groups: ["1", "1"]',
        },
        {
          input: ': "10101", groups: ["1", "1", "1"]',
          output: ' "10111", groups: ["1", "111"]',
        },
        {
          input: ': "11111", groups: ["11111"]',
          output: "up of size 2 exists during any step.",
        },
        {
          input: " arr = [1], m = 1",
          output: " 1",
        },
        {
          input: " arr = [2,1], m = 2",
          output: " 2",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "n == arr. length1 <= n <= 10^51 <= arr[i] <= nAll integers in arr are distinct. 1 <= m <= arr. length",
      ],
    },
    {
      id: "1567",
      title: "Maximum Length of Subarray With Positive Product",
      problemStatement:
        "Given an array of integers nums, find the maximum length of a subarray where the product of all its elements is positive.\nA subarray of an array is a consecutive sequence of zero or more values taken out of that array.\nReturn the maximum length of a subarray with positive product.",
      examples: [
        {
          input: " nums = [1,-2,-3,4]",
          output: " 4",
          explanation: " The array nums already has a positive product of 24.",
        },
        {
          input: " nums = [0,1,-2,-3,-4]",
          output: " 3",
          explanation:
            "The longest subarray with positive product is [1,-2,-3] which has a product of 6.",
        },
        {
          input:
            " that we cannot include 0 in the subarray since that'll make the product 0 which is not positive. Input: nums = [-1,-2,-3,0,1]",
          output: " 2",
          explanation:
            "The longest subarray with positive product is [-1,-2] or [-2,-3].",
        },
        {
          input: " nums = [-1,2]",
          output: " 1",
        },
        {
          input: " nums = [1,2,3,5,-6,4,0,10]",
          output: " 4",
        },
        {
          input: "",
        },
      ],
      constraints: ["1 <= nums. length <= 10^5-10^9 <= nums[i] <= 10^9"],
    },
    {
      id: "1573",
      title: "Number of Ways to Split a String",
      problemStatement:
        "Given a binary string s (a string consisting only of '0's and '1's), we can split s into 3 non-empty strings s1, s2, s3 (s1+ s2+ s3 = s).\nReturn the number of ways s can be split such that the number of characters '1' is the same in s1, s2, and s3.\nSince the answer may be too large, return it modulo 10^9 + 7.",
      examples: [
        {
          input: ' s = "10101"',
          output: " 4",
          explanation:
            "There are four ways to split s in 3 parts where each part contain the same number of letters '1'.",
        },
        {
          input: '|1"',
          output: '01"',
        },
        {
          input: '|1"',
          output: '01"',
        },
        {
          input: ' s = "1001"',
          output: " 0",
        },
        {
          input: ' s = "0000"',
          output: " 3",
          explanation: " There are three ways to split s in 3 parts.",
        },
        {
          input: '0"',
          output: '0"',
        },
        {
          input: '0"',
          output: ' s = "100100010100110"',
        },
        {
          input: "12",
        },
      ],
      constraints: ["3 <= s. length <= 10^5s[i] is '0' or '1'."],
    },
    {
      id: "1574",
      title: "Shortest Subarray to be Removed to Make Array Sorted",
      problemStatement:
        "Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing.\nA subarray is a contiguous subsequence of the array.\nReturn the length of the shortest subarray to remove.",
      examples: [
        {
          input: " arr = [1,2,3,10,4,2,3,5]",
          output: " 3",
          explanation:
            "The shortest subarray we can remove is [10,4,2] of length 3. The remaining elements after that will be [1,2,3,3,5] which are sorted.",
        },
        {
          input:
            "r correct solution is to remove the subarray [3,10,4]. Input: arr = [5,4,3,2,1]",
          output: " 4",
          explanation:
            "Since the array is strictly decreasing, we can only keep a single element. Therefore we need to remove a subarray of length 4, either [5,4,3,2] or [4,3,2,1].",
        },
        {
          input: " arr = [1,2,3]",
          output: " 0",
          explanation:
            "The array is already non-decreasing. We do not need to remove any elements.",
        },
        {
          input: " arr = [1]",
          output: " 0",
        },
        {
          input: "",
        },
      ],
      constraints: ["1 <= arr. length <= 10^50 <= arr[i] <= 10^9"],
    },
    {
      id: "1577",
      title:
        "Number of Ways Where Square of Number Is Equal to Product of Two Numbers",
      problemStatement:
        "Given two arrays of integers nums1 and nums2, return the number of triplets formed (type 1 and type 2) under the following rules:",
      examples: [
        {
          input: " nums1 = [7,4], nums2 = [5,2,8,9]",
          output: " 1",
          explanation:
            "Type 1: (1,1,2), nums1[1]^2 = nums2[1] * nums2[2]. (4^2 = 2 * 8). ",
        },
        {
          input: " nums1 = [1,1], nums2 = [1,1,1]",
          output: " 9",
          explanation: " All Triplets are valid, because 1^2 = 1 * 1.",
        },
        {
          input:
            "(0,0,1), (0,0,2), (0,1,2), (1,0,1), (1,0,2), (1,1,2).  nums1[i]^2 = nums2[j] * nums2[k].",
          output:
            " (0,0,1), (1,0,1), (2,0,1). nums2[i]^2 = nums1[j] * nums1[k].",
        },
        {
          input: " nums1 = [7,7,8,3], nums2 = [1,2,9,7]",
          output: " 2",
          explanation: " There are 2 valid triplets.",
        },
        {
          input: "(3,0,2).  nums1[3]^2 = nums2[0] * nums2[2].",
          output: " (3,0,1).  nums2[3]^2 = nums1[0] * nums1[1].",
        },
        {
          input: " nums1 = [4,7,9,11,23], nums2 = [3,5,1024,12,18]",
          output: " 0",
          explanation: " There are no valid triplets.",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "Type 1: Triplet (i",
        " j",
        " k) if nums1[i]2 == nums2[j] * nums2[k] where 0 <= i < nums1. length and 0 <= j < k < nums2. length. Type 2: Triplet (i",
        " j",
        " k) if nums2[i]2 == nums1[j] * nums1[k] where 0 <= i < nums2. length and 0 <= j < k < nums1. length. 1 <= nums1. length",
        " nums2. length <= 10001 <= nums1[i]",
        " nums2[i] <= 10^5",
      ],
    },
    {
      id: "1578",
      title: "Minimum Deletion Cost to Avoid Repeating Letters",
      problemStatement:
        "Given a string s and an array of integers cost where cost[i] is the cost of deleting the ith character in s.\nReturn the minimum cost of deletions such that there are no two identical letters next to each other.\nNotice that you will delete the chosen characters at the same time, in other words, after deleting a character, the costs of deleting other characters will not change.",
      examples: [
        {
          input: ' s = "abaac", cost = [1,2,3,4,5]',
          output: " 3",
          explanation:
            ': Delete the letter "a" with cost 3 to get "abac" (String without two identical letters next to each other).',
        },
        {
          input: ' s = "abc", cost = [1,2,3]',
          output: " 0",
          explanation:
            "You don't need to delete any character because there are no identical letters next to each other.",
        },
        {
          input: ' s = "aabaa", cost = [1,2,3,4,1]',
          output: " 2",
          explanation:
            ': Delete the first and the last character, getting the string ("aba").',
        },
        {
          input: "",
        },
      ],
      constraints: [
        "s. length == cost. length1 <= s. length",
        " cost. length <= 10^51 <= cost[i] <= 10^4s contains only lowercase English letters.",
      ],
    },
    {
      id: "1583",
      title: "Count Unhappy Friends",
      problemStatement:
        "You are given a list of preferences for n friends, where n is always even.\nFor each person i, preferences[i] contains a list of friends sorted in the order of preference.\n In other words, a friend earlier in the list is more preferred than a friend later in the list.\n Friends in each list are denoted by integers from 0 to n-1.\nAll the friends are divided into pairs.\n The pairings are given in a list pairs, where pairs[i] = [xi, yi] denotes xi is paired with yi and yi is paired with xi.\nHowever, this pairing may cause some of the friends to be unhappy.\n A friend x is unhappy if x is paired with y and there exists a friend u who is paired with v but:Return the number of unhappy friends.",
      examples: [
        {
          input:
            " n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]]",
          output: " 2",
          explanation: "",
        },
        {
          input: " 1 is unhappy because:",
          output: " paired with 0 but prefers 3 over 0, and",
        },
        {
          input: "efers 1 over 2.",
          output: " 3 is unhappy because:",
        },
        {
          input: " paired with 2 but prefers 1 over 2, and",
          output: "efers 3 over 0.",
        },
        {
          input: "s 0 and 2 are happy.",
          output: " n = 2, preferences = [[1], [0]], pairs = [[1, 0]]",
        },
        {
          input: "0",
          output: "ation: Both friends 0 and 1 are happy.",
        },
        {
          input:
            " n = 4, preferences = [[1, 3, 2], [2, 3, 0], [1, 3, 0], [0, 2, 1]], pairs = [[1, 3], [0, 2]]",
          output: " 4",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "x prefers u over y",
        " andu prefers x over v. 2 <= n <= 500n is even. preferences. length == npreferences[i]. length == n - 10 <= preferences[i][j] <= n - 1preferences[i] does not contain i. All values in preferences[i] are unique. pairs. length == n/2pairs[i]. length == 2xi != yi0 <= xi",
        " yi <= n - 1Each person is contained in exactly one pair.",
      ],
    },
    {
      id: "496",
      title: "Next Greater Element I",
      problemStatement:
        "The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.\nYou are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.\nFor each 0 <= i < nums1.\nlength, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2.\n If there is no next greater element, then the answer for this query is -1.\nReturn an array ans of length nums1.\nlength such that ans[i] is the next greater element as described above.",
      examples: [
        {
          input: " nums1 = [4,1,2], nums2 = [1,3,4,2]",
          output: " [-1,3,-1]",
          explanation:
            "The next greater element for each value of nums1 is as follows:",
        },
        {
          input:
            " underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.",
          output:
            " underlined in nums2 = [1,3,4,2]. The next greater element is 3.",
        },
        {
          input:
            " underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.",
          output: " nums1 = [2,4], nums2 = [1,2,3,4]",
        },
        {
          input: "[3,-1]",
          output:
            "ation: The next greater element for each value of nums1 is as follows:",
        },
        {
          input:
            " underlined in nums2 = [1,2,3,4]. The next greater element is 3.",
          output:
            " underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "1 <= nums1. length <= nums2. length <= 10000 <= nums1[i]",
        " nums2[i] <= 104All integers in nums1 and nums2 are unique. All the integers of nums1 also appear in nums2.",
      ],
    },
    {
      id: "1584",
      title: "Min Cost to Connect All Points",
      problemStatement:
        "You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].\nThe cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.\nReturn the minimum cost to make all points connected.\n All points are connected if there is exactly one simple path between any two points.",
      examples: [
        {
          input: " points = [[0,0],[2,2],[3,10],[5,2],[7,0]]",
          output: " 20",
          explanation: "",
        },
        {
          input: "",
          output:
            " connect the points as shown above to get the minimum cost of 20.",
        },
        {
          input: " that there is a unique path between every pair of points.",
          output: " points = [[3,12],[-2,5],[-4,1]]",
        },
        {
          input: "18",
          output: " points = [[0,0],[1,1],[1,0],[-1,1]]",
        },
        {
          input: "4",
          output: " points = [[-1000000,-1000000],[1000000,1000000]]",
        },
        {
          input: "4000000",
          output: " points = [[0,0]]",
        },
        {
          input: "0",
        },
      ],
      constraints: [
        "1 <= points. length <= 1000-106 <= xi",
        " yi <= 106All pairs (xi",
        " yi) are distinct.",
      ],
    },
    {
      id: "1589",
      title: "Maximum Sum Obtained of Any Permutation",
      problemStatement:
        "We have an array of integers, nums, and an array of requests where requests[i] = [starti, endi].\n The ith request asks for the sum of nums[starti] + nums[starti + 1] + .\n.\n.\n + nums[endi - 1] + nums[endi].\n Both starti and endi are 0-indexed.\nReturn the maximum total sum of all requests among all permutations of nums.\nSince the answer may be too large, return it modulo 109 + 7.",
      examples: [
        {
          input: " nums = [1,2,3,4,5], requests = [[1,3],[0,1]]",
          output: " 19",
          explanation:
            "One permutation of nums is [2,1,3,4,5] with the following result: ",
        },
        {
          input: "ts[0] -> nums[1] + nums[2] + nums[3] = 1 + 3 + 4 = 8",
          output: "ts[1] -> nums[0] + nums[1] = 2 + 1 = 3",
        },
        {
          input: "sum: 8 + 3 = 11.",
          output:
            "utation with a higher total sum is [3,5,4,2,1] with the following result:",
        },
        {
          input: "ts[0] -> nums[1] + nums[2] + nums[3] = 5 + 4 + 2 = 11",
          output: "ts[1] -> nums[0] + nums[1] = 3 + 5  = 8",
        },
        {
          input: "sum: 11 + 8 = 19, which is the best that you can do.",
          output: " nums = [1,2,3,4,5,6], requests = [[0,1]]",
        },
        {
          input: "11",
          output:
            "ation: A permutation with the max total sum is [6,5,4,3,2,1] with request sums [11]. Input: nums = [1,2,3,4,5,10], requests = [[0,2],[1,3],[1,1]]",
        },
        {
          input: "47",
          output:
            "ation: A permutation with the max total sum is [4,10,5,3,2,1] with request sums [19,18,10].",
        },
      ],
      constraints: [
        "n == nums. length1 <= n <= 1050 <= nums[i] <= 1051 <= requests. length <= 105requests[i]. length == 20 <= starti <= endi < n",
      ],
    },
    {
      id: "1590",
      title: "Make Sum Divisible by P",
      problemStatement:
        "Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p.\n It is not allowed to remove the whole array.\nReturn the length of the smallest subarray that you need to remove, or -1 if it's impossible.\nA subarray is defined as a contiguous block of elements in the array.",
      examples: [
        {
          input: " nums = [3,1,4,2], p = 6",
          output: " 1",
          explanation:
            "The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.",
        },
        {
          input: " nums = [6,3,5,2], p = 9",
          output: " 2",
          explanation:
            "We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.",
        },
        {
          input: " nums = [1,2,3], p = 3",
          output: " 0",
          explanation:
            "Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.",
        },
        {
          input: " nums = [1,2,3], p = 7",
          output: " -1",
          explanation:
            "There is no way to remove a subarray in order to get a sum divisible by 7.",
        },
        {
          input: " nums = [1000000000,1000000000,1000000000], p = 3",
          output: " 0",
        },
        {
          input: "",
        },
      ],
      constraints: ["1 <= nums. length <= 1051 <= nums[i] <= 1091 <= p <= 109"],
    },
    {
      id: "1593",
      title: "Split a String Into the Max Number of Unique Substrings",
      problemStatement:
        "Given a string s, return the maximum number of unique substrings that the given string can be split into.\nYou can split string s into any list of non-empty substrings, where the concatenation of the substrings forms the original string.\n However, you must split the substrings such that all of them are unique.\nA substring is a contiguous sequence of characters within a string.",
      examples: [
        {
          input: ' s = "ababccc"',
          output: " 5",
          explanation:
            "One way to split maximally is ['a', 'b', 'ab', 'c', 'cc']. Splitting like ['a', 'b', 'a', 'b', 'c', 'cc'] is not valid as you have 'a' and 'b' multiple times.",
        },
        {
          input: ' s = "aba"',
          output: " 2",
          explanation: " One way to split maximally is ['a', 'ba'].",
        },
        {
          input: ' s = "aa"',
          output: " 1",
          explanation: " It is impossible to split the string any further.",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "\n1 <= s. length <= 16\n\ns contains only lower case English letters.\n",
      ],
    },
    {
      id: "1594",
      title: "Maximum Non Negative Product in a Matrix",
      problemStatement:
        "You are given a rows x cols matrix grid.\n Initially, you are located at the top-left corner (0, 0), and in each step, you can only move right or down in the matrix.\nAmong all possible paths starting from the top-left corner (0, 0) and ending in the bottom-right corner (rows - 1, cols - 1), find the path with the maximum non-negative product.\n The product of a path is the product of all integers in the grid cells visited along the path.\nReturn the maximum non-negative product modulo 109 + 7.\n If the maximum product is negative return -1.\nNotice that the modulo is performed after getting the maximum product.",
      examples: [
        {
          input: " grid = [[-1,-2,-3],",
          output: "         [-2,-3,-3],",
        },
        {
          input: "         [-3,-3,-2]]",
          output: " -1",
          explanation:
            "It's not possible to get non-negative product in the path from (0, 0) to (2, 2), so return -1.",
        },
        {
          input: " grid = [[1,-2,1],",
          output: "         [1,-2,1],",
        },
        {
          input: "         [3,-4,1]]",
          output: " 8",
          explanation:
            "Maximum non-negative product is in bold (1 * 1 * -2 * -4 * 1 = 8).",
        },
        {
          input: " grid = [[1, 3],",
          output: "         [0,-4]]",
        },
        {
          input: "0",
          output:
            "ation: Maximum non-negative product is in bold (1 * 0 * -4 = 0).",
        },
        {
          input: " grid = [[ 1, 4,4,0],",
          output: "         [-2, 0,0,1],",
        },
        {
          input: "         [ 1,-1,1,1]]",
          output: " 2",
          explanation:
            "Maximum non-negative product is in bold (1 * -2 * 1 * -1 * 1 * 1 = 2).",
        },
        {
          input: "",
        },
      ],
      constraints: ["1 <= rows", " cols <= 15-4 <= grid[i][j] <= 4"],
    },
    {
      id: "1599",
      title: "Maximum Profit of Operating a Centennial Wheel",
      problemStatement:
        "You are the operator of a Centennial Wheel that has four gondolas, and each gondola has room for up to four people.\n You have the ability to rotate the gondolas counterclockwise, which costs you runningCost dollars.\nYou are given an array customers of length n where customers[i] is the number of new customers arriving just before the ith rotation (0-indexed).\n This means you must rotate the wheel i times before the customers[i] customers arrive.\n You cannot make customers wait if there is room in the gondola.\n Each customer pays boardingCost dollars when they board on the gondola closest to the ground and will exit once that gondola reaches the ground again.\nYou can stop the wheel at any time, including before serving all customers.\n If you decide to stop serving customers, all subsequent rotations are free in order to get all the customers down safely.\n Note that if there are currently more than four customers waiting at the wheel, only four will board the gondola, and the rest will wait for the next rotation.\nReturn the minimum number of rotations you need to perform to maximize your profit.\n If there is no scenario where the profit is positive, return -1.",
      examples: [
        {
          input: " customers = [8,3], boardingCost = 5, runningCost = 6",
          output: " 3",
          explanation:
            "The numbers written on the gondolas are the number of people currently there.",
        },
        {
          input:
            "ustomers arrive, 4 board and 4 wait for the next gondola, the wheel rotates. Current profit is 4 * $5 - 1 * $6 = $14.",
          output:
            "ustomers arrive, the 4 waiting board the wheel and the other 3 wait, the wheel rotates. Current profit is 8 * $5 - 2 * $6 = $28.",
        },
        {
          input:
            " final 3 customers board the gondola, the wheel rotates. Current profit is 11 * $5 - 3 * $6 = $37.",
          output:
            "ghest profit was $37 after rotating the wheel 3 times. Input: customers = [10,9,6], boardingCost = 6, runningCost = 4",
        },
        {
          input: "7",
          output: "ation:",
        },
        {
          input:
            "customers arrive, 4 board and 6 wait for the next gondola, the wheel rotates. Current profit is 4 * $6 - 1 * $4 = $20.",
          output:
            "ustomers arrive, 4 board and 11 wait (2 originally waiting, 9 newly waiting), the wheel rotates. Current profit is 8 * $6 - 2 * $4 = $40.",
        },
        {
          input:
            " final 6 customers arrive, 4 board and 13 wait, the wheel rotates. Current profit is 12 * $6 - 3 * $4 = $60.",
          output:
            "oard and 9 wait, the wheel rotates. Current profit is 16 * $6 - 4 * $4 = $80.",
        },
        {
          input:
            "oard and 5 wait, the wheel rotates. Current profit is 20 * $6 - 5 * $4 = $100.",
          output:
            "oard and 1 waits, the wheel rotates. Current profit is 24 * $6 - 6 * $4 = $120.",
        },
        {
          input:
            "oards, the wheel rotates. Current profit is 25 * $6 - 7 * $4 = $122.",
          output: "ghest profit was $122 after rotating the wheel 7 times.",
        },
        {
          input: "",
          output:
            " customers = [3,4,0,5,1], boardingCost = 1, runningCost = 92",
        },
        {
          input: "-1",
          output: "ation:",
        },
        {
          input:
            "ustomers arrive, 3 board and 0 wait, the wheel rotates. Current profit is 3 * $1 - 1 * $92 = -$89.",
          output:
            "ustomers arrive, 4 board and 0 wait, the wheel rotates. Current profit is 7 * $1 - 2 * $92 = -$177.",
        },
        {
          input:
            "ustomers arrive, 0 board and 0 wait, the wheel rotates. Current profit is 7 * $1 - 3 * $92 = -$269.",
          output:
            "ustomers arrive, 4 board and 1 waits, the wheel rotates. Current profit is 11 * $1 - 4 * $92 = -$357.",
        },
        {
          input:
            "ustomer arrives, 2 board and 0 wait, the wheel rotates. Current profit is 13 * $1 - 5 * $92 = -$447.",
          output: "ofit was never positive, so return -1.",
        },
        {
          input:
            " customers = [10,10,6,4,7], boardingCost = 3, runningCost = 8",
          output: " 9",
          explanation: "",
        },
        {
          input:
            "customers arrive, 4 board and 6 wait, the wheel rotates. Current profit is 4 * $3 - 1 * $8 = $4.",
          output:
            "customers arrive, 4 board and 12 wait, the wheel rotates. Current profit is 8 * $3 - 2 * $8 = $8.",
        },
        {
          input:
            "ustomers arrive, 4 board and 14 wait, the wheel rotates. Current profit is 12 * $3 - 3 * $8 = $12.",
          output:
            "ustomers arrive, 4 board and 14 wait, the wheel rotates. Current profit is 16 * $3 - 4 * $8 = $16.",
        },
        {
          input:
            "ustomers arrive, 4 board and 17 wait, the wheel rotates. Current profit is 20 * $3 - 5 * $8 = $20.",
          output:
            "oard and 13 wait, the wheel rotates. Current profit is 24 * $3 - 6 * $8 = $24.",
        },
        {
          input:
            "oard and 9 wait, the wheel rotates. Current profit is 28 * $3 - 7 * $8 = $28.",
          output:
            "oard and 5 wait, the wheel rotates. Current profit is 32 * $3 - 8 * $8 = $32.",
        },
        {
          input:
            "oard and 1 waits, the wheel rotates. Current profit is 36 * $3 - 9 * $8 = $36.",
          output:
            "board and 0 wait, the wheel rotates. Current profit is 37 * $3 - 10 * $8 = $31.",
        },
        {
          input: "ghest profit was $36 after rotating the wheel 9 times.",
        },
      ],
      constraints: [
        "n == customers. length1 <= n <= 1050 <= customers[i] <= 501 <= boardingCost",
        " runningCost <= 100",
      ],
    },
    {
      id: "1600",
      title: "Throne Inheritance",
      problemStatement:
        "A kingdom consists of a king, his children, his grandchildren, and so on.\n Every once in a while, someone in the family dies or a child is born.\nThe kingdom has a well-defined order of inheritance that consists of the king as the first member.\n Let's define the recursive function Successor(x, curOrder), which given a person x and the inheritance order so far, returns who should be the next person after x in the order of inheritance.\nFor example, assume we have a kingdom that consists of the king, his children Alice and Bob (Alice is older than Bob), and finally Alice's son Jack.\nUsing the above function, we can always obtain a unique order of inheritance.\nImplement the ThroneInheritance class:",
      examples: [
        {
          input: "sor(x, curOrder):",
          output: " x has no children or all of x's children are in curOrder:",
        },
        {
          input: "  if x is the king return null",
          output: "  else return Successor(x's parent, curOrder)",
        },
        {
          input: "se return x's oldest child who's not in curOrder",
        },
        {
          input:
            'neInheritance", "birth", "birth", "birth", "birth", "birth", "birth", "getInheritanceOrder", "death", "getInheritanceOrder"]',
          output:
            'g"], ["king", "andy"], ["king", "bob"], ["king", "catherine"], ["andy", "matthew"], ["bob", "alex"], ["bob", "asha"], [null], ["bob"], [null]]',
        },
        {
          input: "",
          output:
            ' null, null, null, null, null, null, ["king", "andy", "matthew", "bob", "alex", "asha", "catherine"], null, ["king", "andy", "matthew", "alex", "asha", "catherine"]]',
        },
        {
          input: "",
          output: "ation",
        },
        {
          input: 'Inheritance t= new ThroneInheritance("king"); // order: king',
          output: 'th("king", "andy"); // order: king > andy',
        },
        {
          input: 'th("king", "bob"); // order: king > andy > bob',
          output:
            'th("king", "catherine"); // order: king > andy > bob > catherine',
        },
        {
          input:
            'th("andy", "matthew"); // order: king > andy > matthew > bob > catherine',
          output:
            'th("bob", "alex"); // order: king > andy > matthew > bob > alex > catherine',
        },
        {
          input:
            'th("bob", "asha"); // order: king > andy > matthew > bob > alex > asha > catherine',
          output:
            'InheritanceOrder(); // return ["king", "andy", "matthew", "bob", "alex", "asha", "catherine"]',
        },
        {
          input:
            'th("bob"); // order: king > andy > matthew > bob > alex > asha > catherine',
          output:
            'InheritanceOrder(); // return ["king", "andy", "matthew", "alex", "asha", "catherine"]',
        },
        {
          input: "",
        },
      ],
      constraints: [
        "ThroneInheritance(string kingName) Initializes an object of the ThroneInheritance class. The name of the king is given as part of the constructor. void birth(string parentName",
        " string childName) Indicates that parentName gave birth to childName. void death(string name) Indicates the death of name. The death of the person doesn't affect the Successor function nor the current inheritance order. You can treat it as just marking the person as dead. string[] getInheritanceOrder() Returns a list representing the current order of inheritance excluding dead people. 1 <= kingName. length",
        " parentName. length",
        " childName. length",
        " name. length <= 15kingName",
        " parentName",
        " childName",
        " and name consist of lowercase English letters only. All arguments childName and kingName are distinct. All name arguments of death will be passed to either the constructor or as childName to birth first. For each call to birth(parentName",
        " childName)",
        " it is guaranteed that parentName is alive. At most 105 calls will be made to birth and death. At most 10 calls will be made to getInheritanceOrder.",
      ],
    },
    {
      id: "1604",
      title:
        "Alert Using Same Key-Card Three or More Times in a One Hour Period",
      problemStatement:
        'LeetCode company workers use key-cards to unlock office doors.\n Each time a worker uses their key-card, the security system saves the worker\'s name and the time when it was used.\n The system emits an alert if any worker uses the key-card three or more times in a one-hour period.\nYou are given a list of strings keyName and keyTime where [keyName[i], keyTime[i]] corresponds to a person\'s name and the time when their key-card was used in a single day.\nAccess times are given in the 24-hour time format "HH:MM", such as "23:51" and "09:49".\nReturn a list of unique worker names who received an alert for frequent keycard use.\n Sort the names in ascending order alphabetically.\nNotice that "10:00" - "11:00" is considered to be within a one-hour period, while "22:51" - "23:52" is not considered to be within a one-hour period.',
      examples: [
        {
          input:
            ' keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"], keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]',
          output: ' ["daniel"]',
          explanation:
            ': "daniel" used the keycard 3 times in a one-hour period ("10:00","10:40", "11:00").',
        },
        {
          input:
            ' keyName = ["alice","alice","alice","bob","bob","bob","bob"], keyTime = ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]',
          output: ' ["bob"]',
          explanation:
            ': "bob" used the keycard 3 times in a one-hour period ("21:00","21:20", "21:30").',
        },
        {
          input:
            ' keyName = ["john","john","john"], keyTime = ["23:58","23:59","00:01"]',
          output: " []",
        },
        {
          input:
            ' keyName = ["leslie","leslie","leslie","clare","clare","clare","clare"], keyTime = ["13:00","13:20","14:00","18:00","18:51","19:30","19:49"]',
          output: ' ["clare","leslie"]',
        },
        {
          input: "",
        },
      ],
      constraints: [
        "1 <= keyName. length",
        ' keyTime. length <= 105keyName. length == keyTime. lengthkeyTime[i] is in the format "HH:MM".[keyName[i]',
        " keyTime[i]] is unique. 1 <= keyName[i]. length <= 10keyName[i] contains only lowercase English letters.",
      ],
    },
    {
      id: "1605",
      title: "Find Valid Matrix Given Row and Column Sums",
      problemStatement:
        "You are given two arrays rowSum and colSum of non-negative integers where rowSum[i] is the sum of the elements in the ith row and colSum[j] is the sum of the elements of the jth column of a 2D matrix.\n In other words, you do not know the elements of the matrix, but you do know the sums of each row and column.\nFind any matrix of non-negative integers of size rowSum.\nlength x colSum.\nlength that satisfies the rowSum and colSum requirements.\nReturn a 2D array representing any matrix that fulfills the requirements.\n It's guaranteed that at least one matrix that fulfills the requirements exists.",
      examples: [
        {
          input: " rowSum = [3,8], colSum = [4,7]",
          output: " [[3,0],",
        },
        {
          input: "   [1,7]]",
          output: "ation:",
        },
        {
          input: "w: 3 + 0 = 3 == rowSum[0]",
          output: "w: 1 + 7 = 8 == rowSum[1]",
        },
        {
          input: "lumn: 3 + 1 = 4 == colSum[0]",
          output: "lumn: 0 + 7 = 7 == colSum[1]",
        },
        {
          input:
            "w and column sums match, and all matrix elements are non-negative.",
          output: "r possible matrix is: [[1,2],",
        },
        {
          input: "                       [3,5]]",
          output: " rowSum = [5,7,10], colSum = [8,6,8]",
        },
        {
          input: "[[0,5,0],",
          output: "   [6,1,0],",
        },
        {
          input: "   [2,0,8]]",
          output: " rowSum = [14,9], colSum = [6,9,8]",
        },
        {
          input: "[[0,9,5],",
          output: "   [6,0,3]]",
        },
        {
          input: " rowSum = [1,0], colSum = [1]",
          output: " [[1],",
        },
        {
          input: "   [0]]",
          output: " rowSum = [0], colSum = [0]",
        },
        {
          input: "[[0]]",
        },
      ],
      constraints: [
        "1 <= rowSum. length",
        " colSum. length <= 5000 <= rowSum[i]",
        " colSum[i] <= 108sum(rows) == sum(columns)",
      ],
    },
    {
      id: "1609",
      title: "Even Odd Tree",
      problemStatement:
        "A binary tree is named Even-Odd if it meets the following conditions:Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise return false.",
      examples: [
        {
          input: " root = [1,10,4,3,null,7,9,12,8,6,null,null,2]",
          output: " true",
          explanation: " The node values on each level are:",
        },
        {
          input: "0: [1]",
          output: "1: [10,4]",
        },
        {
          input: "2: [3,7,9]",
          output: "3: [12,8,6,2]",
        },
        {
          input:
            "levels 0 and 2 are all odd and increasing, and levels 1 and 3 are all even and decreasing, the tree is Even-Odd.",
          output: " root = [5,4,2,3,3,7]",
        },
        {
          input: "false",
          output: "ation: The node values on each level are:",
        },
        {
          input: "0: [5]",
          output: "1: [4,2]",
        },
        {
          input: "2: [3,3,7]",
          output:
            "alues in the level 2 must be in strictly increasing order, so the tree is not Even-Odd.",
        },
        {
          input: " root = [5,9,1,3,5,7]",
          output: " false",
          explanation: " Node values in the level 1 should be even integers.",
        },
        {
          input: " root = [1]",
          output: " true",
        },
        {
          input: " root = [11,8,6,1,3,9,11,30,20,18,16,12,10,4,2,17]",
          output: " true",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "The root of the binary tree is at level index 0",
        " its children are at level index 1",
        " their children are at level index 2",
        " etc. For every even-indexed level",
        " all nodes at the level have odd integer values in strictly increasing order (from left to right). For every odd-indexed level",
        " all nodes at the level have even integer values in strictly decreasing order (from left to right). The number of nodes in the tree is in the range [1",
        " 105]. 1 <= Node. val <= 106",
      ],
    },
    {
      id: "500",
      title: "Keyboard Row",
      problemStatement:
        "Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.\nIn the American keyboard:",
      examples: [
        {
          input: ' words = ["Hello","Alaska","Dad","Peace"]',
          output: ' ["Alaska","Dad"]',
        },
        {
          input: ' words = ["omk"]',
          output: " []",
        },
        {
          input: ' words = ["adsdf","sfd"]',
          output: ' ["adsdf","sfd"]',
        },
        {
          input: "",
        },
      ],
      constraints: [
        'the first row consists of the characters "qwertyuiop"',
        'the second row consists of the characters "asdfghjkl"',
        ' andthe third row consists of the characters "zxcvbnm". 1 <= words. length <= 201 <= words[i]. length <= 100words[i] consists of English letters (both lowercase and uppercase). ',
      ],
    },
    {
      id: "1615",
      title: "Maximal Network Rank",
      problemStatement:
        "There is an infrastructure of n cities with some number of roads connecting these cities.\n Each roads[i] = [ai, bi] indicates that there is a bidirectional road between cities ai and bi.\nThe network rank of two different cities is defined as the total number of directly connected roads to either city.\n If a road is directly connected to both cities, it is only counted once.\nThe maximal network rank of the infrastructure is the maximum network rank of all pairs of different cities.\nGiven the integer n and the array roads, return the maximal network rank of the entire infrastructure.",
      examples: [
        {
          input: " n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]",
          output: " 4",
          explanation:
            "The network rank of cities 0 and 1 is 4 as there are 4 roads that are connected to either 0 or 1. The road between 0 and 1 is only counted once.",
        },
        {
          input: " n = 5, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]",
          output: " 5",
          explanation: "There are 5 roads that are connected to cities 1 or 2.",
        },
        {
          input: " n = 8, roads = [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]",
          output: " 5",
          explanation:
            "The network rank of 2 and 5 is 5. Notice that all the cities do not have to be connected.",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "2 <= n <= 1000 <= roads. length <= n * (n - 1) / 2roads[i]. length == 20 <= ai",
        " bi <= n-1ai != biEach pair of cities has at most one road connecting them.",
      ],
    },
    {
      id: "1616",
      title: "Split Two Strings to Make Palindrome",
      problemStatement:
        'You are given two strings a and b of the same length.\n Choose an index and split both strings at the same index, splitting a into two strings: aprefix and asuffix where a = aprefix + asuffix, and splitting b into two strings: bprefix and bsuffix where b = bprefix + bsuffix.\n Check if aprefix + bsuffix or bprefix + asuffix forms a palindrome.\nWhen you split a string s into sprefix and ssuffix, either ssuffix or sprefix is allowed to be empty.\n For example, if s = "abc", then "" + "abc", "a" + "bc", "ab" + "c" , and "abc" + "" are valid splits.\nReturn true if it is possible to form a palindrome string, otherwise return false.\nNotice that x + y denotes the concatenation of strings x and y.',
      examples: [
        {
          input: ' a = "x", b = "y"',
          output: " true",
        },
        {
          input:
            "nation: If either a or b are palindromes the answer is true since you can split in the following way:",
          output: 'x = "", asuffix = "x"',
        },
        {
          input: 'x = "", bsuffix = "y"',
          output: 'aprefix + bsuffix = "" + "y" = "y", which is a palindrome.',
        },
        {
          input: ' a = "abdef", b = "fecab"',
          output: " true",
        },
        {
          input: ' a = "ulacfd", b = "jizalu"',
          output: " true",
        },
        {
          input: "nation: Split them at index 3:",
          output: 'x = "ula", asuffix = "cfd"',
        },
        {
          input: 'x = "jiz", bsuffix = "alu"',
          output:
            'aprefix + bsuffix = "ula" + "alu" = "ulaalu", which is a palindrome.',
        },
        {
          input: ' a = "xbdef", b = "xecab"',
          output: " false",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "1 <= a. length",
        " b. length <= 105a. length == b. lengtha and b consist of lowercase English letters",
      ],
    },
    {
      id: "1620",
      title: "Coordinate With Maximum Network Quality",
      problemStatement:
        "You are given an array of network towers towers and an integer radius, where towers[i] = [xi, yi, qi] denotes the ith network tower with location (xi, yi) and quality factor qi.\n All the coordinates are integral coordinates on the X-Y plane, and the distance between two coordinates is the Euclidean distance.\nThe integer radius denotes the maximum distance in which the tower is reachable.\n The tower is reachable if the distance is less than or equal to radius.\n Outside that distance, the signal becomes garbled, and the tower is not reachable.\nThe signal quality of the ith tower at a coordinate (x, y) is calculated with the formula ⌊qi / (1 + d)⌋, where d is the distance between the tower and the coordinate.\n The network quality at a coordinate is the sum of the signal qualities from all the reachable towers.\nReturn the integral coordinate where the network quality is maximum.\n If there are multiple coordinates with the same network quality, return the lexicographically minimum coordinate.\nNote:",
      examples: [
        {
          input: " towers = [[1,2,5],[2,1,7],[3,1,9]], radius = 2",
          output: " [2,1]",
          explanation: " ",
        },
        {
          input: "rdinate (2, 1) the total quality is 13",
          output:
            "ity of 7 from (2, 1) results in ⌊7 / (1 + sqrt(0)⌋ = ⌊7⌋ = 7",
        },
        {
          input:
            "ity of 5 from (1, 2) results in ⌊5 / (1 + sqrt(2)⌋ = ⌊2. 07⌋ = 2",
          output:
            "ity of 9 from (3, 1) results in ⌊9 / (1 + sqrt(1)⌋ = ⌊4. 5⌋ = 4",
        },
        {
          input:
            "er coordinate has higher quality. Input: towers = [[23,11,21]], radius = 9",
          output: " [23,11]",
        },
        {
          input: " towers = [[1,2,13],[2,1,7],[0,1,9]], radius = 2",
          output: " [1,2]",
        },
        {
          input: " towers = [[2,1,9],[0,1,9]], radius = 2",
          output: " [0,1]",
          explanation:
            "Both (0, 1) and (2, 1) are optimal in terms of quality but (0, 1) is lexicograpically minimal.",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "A coordinate (x1",
        " y1) is lexicographically smaller than (x2",
        " y2) if either x1 < x2 or x1 == x2 and y1 < y2.⌊val⌋ is the greatest integer less than or equal to val (the floor function). 1 <= towers. length <= 50towers[i]. length == 30 <= xi",
        " yi",
        " qi <= 501 <= radius <= 50",
      ],
    },
    {
      id: "1621",
      title: "Number of Sets of K Non-Overlapping Line Segments",
      problemStatement:
        "Given n points on a 1-D plane, where the ith point (from 0 to n-1) is at x = i, find the number of ways we can draw exactly k non-overlapping line segments such that each segment covers two or more points.\n The endpoints of each segment must have integral coordinates.\n The k line segments do not have to cover all n points, and they are allowed to share endpoints.\nReturn the number of ways we can draw k non-overlapping line segments.\n Since this number can be huge, return it modulo 109 + 7.",
      examples: [
        {
          input: " n = 4, k = 2",
          output: " 5",
          explanation: " ",
        },
        {
          input: "o line segments are shown in red and blue.",
          output:
            "age above shows the 5 different ways {(0,2),(2,3)}, {(0,1),(1,3)}, {(0,1),(2,3)}, {(1,2),(2,3)}, {(0,1),(1,2)}. Input: n = 3, k = 1",
        },
        {
          input: "3",
          output: "ation: The 3 ways are {(0,1)}, {(0,2)}, {(1,2)}.",
        },
        {
          input: " n = 30, k = 7",
          output: " 796297179",
          explanation:
            "The total number of possible ways to draw 7 line segments is 3796297200. Taking this number modulo 109 + 7 gives us 796297179.",
        },
        {
          input: " n = 5, k = 3",
          output: " 7",
        },
        {
          input: " n = 3, k = 2",
          output: " 1",
        },
      ],
      constraints: ["2 <= n <= 10001 <= k <= n-1"],
    },
    {
      id: "1625",
      title: "Lexicographically Smallest String After Applying Operations",
      problemStatement:
        "You are given a string s of even length consisting of digits from 0 to 9, and two integers a and b.\nYou can apply either of the following two operations any number of times and in any order on s:Return the lexicographically smallest string you can obtain by applying the above operations any number of times on s.\nA string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.\n For example, \"0158\" is lexicographically smaller than \"0190\" because the first position they differ is at the third letter, and '5' comes before '9'.",
      examples: [
        {
          input: ' s = "5525", a = 9, b = 2',
          output: ' "2050"',
          explanation: " We can apply the following operations:",
        },
        {
          input: '  "5525"',
          output: ' "2555"',
        },
        {
          input: '  "2454"',
          output: '  "2353"',
        },
        {
          input: ': "5323"',
          output: '  "5222"',
        },
        {
          input: '​Add:    "5121"',
          output: '​Rotate: "2151"',
        },
        {
          input: '​Add:    "2050"​​​​​​​​​​​​',
          output:
            'is no way to obtain a string that is lexicographically smaller then "2050".',
        },
        {
          input: ' s = "74", a = 5, b = 1',
          output: ' "24"',
          explanation: " We can apply the following operations:",
        },
        {
          input: '  "74"',
          output: ' "47"',
        },
        {
          input: '​Add:    "42"',
          output: '​Rotate: "24"​​​​​​​​​​​​',
        },
        {
          input:
            'is no way to obtain a string that is lexicographically smaller then "24".',
          output: ' s = "0011", a = 4, b = 2',
        },
        {
          input: ': "0011"',
          output:
            'ation: There are no sequence of operations that will give us a lexicographically smaller string than "0011".',
        },
        {
          input: ' s = "43987654", a = 7, b = 3',
          output: ' "00553311"',
        },
        {
          input: "",
        },
      ],
      constraints: [
        "Add a to all odd indices of s (0-indexed). Digits post 9 are cycled back to 0. For example",
        ' if s = "3456" and a = 5',
        ' s becomes "3951". Rotate s to the right by b positions. For example',
        ' if s = "3456" and b = 1',
        ' s becomes "6345". 2 <= s. length <= 100s. length is even. s consists of digits from 0 to 9 only. 1 <= a <= 91 <= b <= s. length - 1',
      ],
    },
    {
      id: "1626",
      title: "Best Team With No Conflicts",
      problemStatement:
        "You are the manager of a basketball team.\n For the upcoming tournament, you want to choose the team with the highest overall score.\n The score of the team is the sum of scores of all the players in the team.\nHowever, the basketball team is not allowed to have conflicts.\n A conflict exists if a younger player has a strictly higher score than an older player.\n A conflict does not occur between players of the same age.\nGiven two lists, scores and ages, where each scores[i] and ages[i] represents the score and age of the ith player, respectively, return the highest overall score of all possible basketball teams.",
      examples: [
        {
          input: " scores = [1,3,5,10,15], ages = [1,2,3,4,5]",
          output: " 34",
          explanation: " You can choose all the players.",
        },
        {
          input: " scores = [4,5,6,5], ages = [2,1,2,1]",
          output: " 16",
          explanation:
            "It is best to choose the last 3 players. Notice that you are allowed to choose multiple people of the same age.",
        },
        {
          input: " scores = [1,2,3,5], ages = [8,9,10,1]",
          output: " 6",
          explanation: " It is best to choose the first 3 players. ",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "1 <= scores. length",
        " ages. length <= 1000scores. length == ages. length1 <= scores[i] <= 1061 <= ages[i] <= 1000",
      ],
    },
    {
      id: "1630",
      title: "Arithmetic Subarrays",
      problemStatement:
        "A sequence of numbers is called arithmetic if it consists of at least two elements, and the difference between every two consecutive elements is the same.\n More formally, a sequence s is arithmetic if and only if s[i+1] - s[i] == s[1] - s[0] for all valid i.\nFor example, these are arithmetic sequences:The following sequence is not arithmetic:You are given an array of n integers, nums, and two arrays of m integers each, l and r, representing the m range queries, where the ith query is the range [l[i], r[i]].\n All the arrays are 0-indexed.\nReturn a list of boolean elements answer, where answer[i] is true if the subarray nums[l[i]], nums[l[i]+1], .\n.\n.\n , nums[r[i]] can be rearranged to form an arithmetic sequence, and false otherwise.",
      examples: [
        {
          input: "5, 7, 9",
          output: "7, 7",
        },
        {
          input:
            " -5, -91, 1, 2, 5, 7Input: nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]",
          output: " [true,false,true]",
          explanation: "",
        },
        {
          input:
            " 0th query, the subarray is [4,6,5]. This can be rearranged as [6,5,4], which is an arithmetic sequence.",
          output:
            " 1st query, the subarray is [4,6,5,9]. This cannot be rearranged as an arithmetic sequence.",
        },
        {
          input:
            " 2nd query, the subarray is [5,9,3,7]. This can be rearranged as [3,5,7,9], which is an arithmetic sequence. Input: nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]",
          output: " [false,true,false,false,true,true]",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "n == nums. lengthm == l. lengthm == r. length2 <= n <= 5001 <= m <= 5000 <= l[i] < r[i] < n-105 <= nums[i] <= 105",
      ],
    },
    {
      id: "1631",
      title: "Path With Minimum Effort",
      problemStatement:
        "You are a hiker preparing for an upcoming hike.\n You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col).\n You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.\ne.\n, 0-indexed).\n You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.\nA route's effort is the maximum absolute difference in heights between two consecutive cells of the route.\nReturn the minimum effort required to travel from the top-left cell to the bottom-right cell.",
      examples: [
        {
          input: " heights = [[1,2,2],[3,8,2],[5,3,5]]",
          output: " 2",
          explanation:
            "The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.",
        },
        {
          input:
            "s better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.",
          output: " heights = [[1,2,3],[3,8,4],[5,3,5]]",
        },
        {
          input: "1",
          output:
            "ation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].",
        },
        {
          input:
            " heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]",
          output: " 0",
          explanation: " This route does not require any effort.",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "rows == heights. lengthcolumns == heights[i]. length1 <= rows",
        " columns <= 1001 <= heights[i][j] <= 106",
      ],
    },
    {
      id: "1637",
      title: "Widest Vertical Area Between Two Points Containing No Points",
      problemStatement:
        "Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.\nA vertical area is an area of fixed-width extending infinitely along the y-axis (i.\ne.\n, infinite height).\n The widest vertical area is the one with the maximum width.\nNote that points on the edge of a vertical area are not considered included in the area.",
      examples: [
        {
          input: " points = [[8,7],[9,9],[7,4],[9,7]]",
          output: " 1",
          explanation: " Both the red and the blue area are optimal.",
        },
        {
          input: " points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]",
          output: " 3",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "n == points. length2 <= n <= 105points[i]. length == 20 <= xi",
        " yi <= 109",
      ],
    },
    {
      id: "1638",
      title: "Count Substrings That Differ by One Character",
      problemStatement:
        "Given two strings s and t, find the number of ways you can choose a non-empty substring of s and replace a single character by a different character such that the resulting substring is a substring of t.\n In other words, find the number of substrings in s that differ from some substring in t by exactly one character.\nFor example, the underlined substrings in \"computer\" and \"computation\" only differ by the 'e'/'a', so this is a valid way.\nReturn the number of substrings that satisfy the condition above.\nA substring is a contiguous sequence of characters within a string.",
      examples: [
        {
          input: ' s = "aba", t = "baba"',
          output: " 6",
          explanation:
            "The following are the pairs of substrings from s and t that differ by exactly 1 character:",
        },
        {
          input: ', "baba")',
          output: ', "baba")',
        },
        {
          input: ', "baba")',
          output: ', "baba")',
        },
        {
          input: ', "baba")',
          output: ', "baba")',
        },
        {
          input:
            "derlined portions are the substrings that are chosen from s and t.",
          output: ' s = "ab", t = "bb"',
        },
        {
          input: "3",
          output:
            "ation: The following are the pairs of substrings from s and t that differ by 1 character:",
        },
        {
          input: ' "bb")',
          output: ' "bb")',
        },
        {
          input: ' "bb")',
          output:
            "e underlined portions are the substrings that are chosen from s and t.",
        },
        {
          input: ' s = "a", t = "a"',
          output: " 0",
        },
        {
          input: ' s = "abe", t = "bbc"',
          output: " 10",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "1 <= s. length",
        " t. length <= 100s and t consist of lowercase English letters only.",
      ],
    },
    {
      id: "501",
      title: "Find Mode in Binary Search Tree",
      problemStatement:
        "Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.\ne.\n, the most frequently occurred element) in it.\nIf the tree has more than one mode, return them in any order.\nAssume a BST is defined as follows:",
      examples: [
        {
          input: " root = [1,null,2,2]",
          output: " [2]",
        },
        {
          input: " root = [0]",
          output: " [0]",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "The left subtree of a node contains only nodes with keys less than or equal to the node's key. The right subtree of a node contains only nodes with keys greater than or equal to the node's key. Both the left and right subtrees must also be binary search trees. The number of nodes in the tree is in the range [1",
        " 104].-105 <= Node. val <= 105",
      ],
    },
    {
      id: "1641",
      title: "Count Sorted Vowel Strings",
      problemStatement:
        "Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.\nA string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.",
      examples: [
        {
          input: " n = 1",
          output: " 5",
          explanation:
            ': The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].',
        },
        {
          input: " n = 2",
          output: " 15",
          explanation: "The 15 sorted strings that consist of vowels only are",
        },
        {
          input:
            '"ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].',
          output:
            "hat \"ea\" is not a valid string since 'e' comes after 'a' in the alphabet.",
        },
        {
          input: " n = 33",
          output: " 66045",
        },
        {
          input: "",
        },
      ],
      constraints: ["1 <= n <= 50 "],
    },
    {
      id: "1642",
      title: "Furthest Building You Can Reach",
      problemStatement:
        "You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.\nYou start your journey from building 0 and move to the next building by possibly using bricks or ladders.\nWhile moving from building i to building i+1 (0-indexed),Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally.",
      examples: [
        {
          input: " heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1",
          output: " 4",
          explanation: " Starting at building 0, you can follow these steps:",
        },
        {
          input: "o building 1 without using ladders nor bricks since 4 >= 2.",
          output:
            "o building 2 using 5 bricks. You must use either bricks or ladders because 2 < 7.",
        },
        {
          input: "o building 3 without using ladders nor bricks since 7 >= 6.",
          output:
            "o building 4 using your only ladder. You must use either bricks or ladders because 6 < 9.",
        },
        {
          input:
            "impossible to go beyond building 4 because you do not have any more bricks or ladders.",
          output:
            " heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2",
        },
        {
          input: "7",
          output: " heights = [14,3,19,3], bricks = 17, ladders = 0",
        },
        {
          input: "3",
        },
      ],
      constraints: [
        "If the current building's height is greater than or equal to the next building's height",
        " you do not need a ladder or bricks. If the current building's height is less than the next building's height",
        " you can either use one ladder or (h[i+1] - h[i]) bricks. 1 <= heights. length <= 1051 <= heights[i] <= 1060 <= bricks <= 1090 <= ladders <= heights. length",
      ],
    },
    {
      id: "1647",
      title: "Minimum Deletions to Make Character Frequencies Unique",
      problemStatement:
        "A string s is called good if there are no two different characters in s that have the same frequency.\nGiven a string s, return the minimum number of characters you need to delete to make s good.\nThe frequency of a character in a string is the number of times it appears in the string.\n For example, in the string \"aab\", the frequency of 'a' is 2, while the frequency of 'b' is 1.",
      examples: [
        {
          input: ' s = "aab"',
          output: " 0",
          explanation: " s is already good.",
        },
        {
          input: ' s = "aaabbbcc"',
          output: " 2",
          explanation:
            "You can delete two 'b's resulting in the good string \"aaabcc\".",
        },
        {
          input:
            "r way it to delete one 'b' and one 'c' resulting in the good string \"aaabbc\". Input: s = \"ceabaacb\"",
          output: " 2",
          explanation:
            "You can delete both 'c's resulting in the good string \"eabaab\".",
        },
        {
          input:
            "hat we only care about characters that are still in the string at the end (i. e. frequency of 0 is ignored).",
        },
      ],
      constraints: [
        "1 <= s. length <= 105s contains only lowercase English letters.",
      ],
    },
    {
      id: "1648",
      title: "Sell Diminishing-Valued Colored Balls",
      problemStatement:
        "You have an inventory of different colored balls, and there is a customer that wants orders balls of any color.\nThe customer weirdly values the colored balls.\n Each colored ball's value is the number of balls of that color you currently have in your inventory.\n For example, if you own 6 yellow balls, the customer would pay 6 for the first yellow ball.\n After the transaction, there are only 5 yellow balls left, so the next yellow ball is then valued at 5 (i.\ne.\n, the value of the balls decreases as you sell more to the customer).\nYou are given an integer array, inventory, where inventory[i] represents the number of balls of the ith color that you initially own.\n You are also given an integer orders, which represents the total number of balls that the customer wants.\n You can sell the balls in any order.\nReturn the maximum total value that you can attain after selling orders colored balls.\n As the answer may be too large, return it modulo 109 + 7.",
      examples: [
        {
          input: " inventory = [2,5], orders = 4",
          output: " 14",
          explanation:
            "Sell the 1st color 1 time (2) and the 2nd color 3 times (5 + 4 + 3).",
        },
        {
          input: "ximum total value is 2 + 5 + 4 + 3 = 14.",
          output: " inventory = [3,5], orders = 6",
        },
        {
          input: "19",
          output:
            "ation: Sell the 1st color 2 times (3 + 2) and the 2nd color 4 times (5 + 4 + 3 + 2).",
        },
        {
          input: "ximum total value is 3 + 2 + 5 + 4 + 3 + 2 = 19.",
          output: " inventory = [2,8,4,10,6], orders = 20",
        },
        {
          input: "110",
          output: " inventory = [1000000000], orders = 1000000000",
        },
        {
          input: "21",
          output:
            "ation: Sell the 1st color 1000000000 times for a total value of 500000000500000000. 500000000500000000 modulo 109 + 7 = 21.",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "1 <= inventory. length <= 1051 <= inventory[i] <= 1091 <= orders <= min(sum(inventory[i])",
        " 109)",
      ],
    },
    {
      id: "1653",
      title: "Minimum Deletions to Make String Balanced",
      problemStatement:
        "You are given a string s consisting only of characters 'a' and 'b'​​​​.\nYou can delete any number of characters in s to make s balanced.\n s is balanced if there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.\nReturn the minimum number of deletions needed to make s balanced.",
      examples: [
        {
          input: ' s = "aababbab"',
          output: " 2",
          explanation: " You can either:",
        },
        {
          input:
            ' the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or',
          output:
            ' the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").',
        },
        {
          input: ' s = "bbaaaaabb"',
          output: " 2",
          explanation:
            "The only solution is to delete the first two characters.",
        },
        {
          input: "",
        },
      ],
      constraints: ["1 <= s. length <= 105s[i] is 'a' or 'b'​​."],
    },
    {
      id: "1654",
      title: "Minimum Jumps to Reach Home",
      problemStatement:
        "A certain bug's home is on the x-axis at position x.\n Help them get there from position 0.\nThe bug jumps according to the following rules:The bug may jump forward beyond its home, but it cannot jump to positions numbered with negative integers.\nGiven an array of integers forbidden, where forbidden[i] means that the bug cannot jump to the position forbidden[i], and integers a, b, and x, return the minimum number of jumps needed for the bug to reach its home.\n If there is no possible sequence of jumps that lands the bug on position x, return -1.",
      examples: [
        {
          input: " forbidden = [14,4,18,1,15], a = 3, b = 15, x = 9",
          output: " 3",
          explanation:
            "3 jumps forward (0 -> 3 -> 6 -> 9) will get the bug home.",
        },
        {
          input: " forbidden = [8,3,16,6,12,20], a = 15, b = 13, x = 11",
          output: " -1",
        },
        {
          input: " forbidden = [1,6,2,14,5,17,4], a = 16, b = 9, x = 7",
          output: " 2",
          explanation:
            "One jump forward (0 -> 16) then one jump backward (16 -> 7) will get the bug home.",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "It can jump exactly a positions forward (to the right). It can jump exactly b positions backward (to the left). It cannot jump backward twice in a row. It cannot jump to any forbidden positions. 1 <= forbidden. length <= 10001 <= a",
        " b",
        " forbidden[i] <= 20000 <= x <= 2000All the elements in forbidden are distinct. Position x is not forbidden.",
      ],
    },
    {
      id: "1657",
      title: "Determine if Two Strings Are Close",
      problemStatement:
        "Two strings are considered close if you can attain one from the other using the following operations:You can use the operations on either string as many times as necessary.\nGiven two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.",
      examples: [
        {
          input: ' word1 = "abc", word2 = "bca"',
          output: " true",
          explanation: " You can attain word2 from word1 in 2 operations.",
        },
        {
          input: 'Operation 1: "abc" -> "acb"',
          output: 'Operation 1: "acb" -> "bca"',
        },
        {
          input: ' word1 = "a", word2 = "aa"',
          output: " false",
          explanation:
            "It is impossible to attain word2 from word1, or vice versa, in any number of operations.",
        },
        {
          input: ' word1 = "cabbba", word2 = "abbccc"',
          output: " true",
          explanation: " You can attain word2 from word1 in 3 operations.",
        },
        {
          input: 'Operation 1: "cabbba" -> "caabbb"',
          output: 'Operation 2: "caabbb" -> "baaccc"',
        },
        {
          input: 'Operation 2: "baaccc" -> "abbccc"',
          output: ' word1 = "cabbba", word2 = "aabbss"',
        },
        {
          input: "false",
          output:
            "ation: It is impossible to attain word2 from word1, or vice versa, in any amount of operations.",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "Operation 1: Swap any two existing characters.\n\n\t\nFor example",
        " abcde -> aecdb\n\nFor example",
        " abcde -> aecdbOperation 2: Transform every occurrence of one existing character into another existing character",
        " and do the same with the other character.\n\t\nFor example",
        " aacabb -> bbcbaa (all a's turn into b's",
        " and all b's turn into a's)\n\nFor example",
        " aacabb -> bbcbaa (all a's turn into b's",
        " and all b's turn into a's)1 <= word1. length",
        " word2. length <= 105word1 and word2 contain only lowercase English letters.",
      ],
    },
    {
      id: "1658",
      title: "Minimum Operations to Reduce X to Zero",
      problemStatement:
        "You are given an integer array nums and an integer x.\n In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x.\n Note that this modifies the array for future operations.\nReturn the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.",
      examples: [
        {
          input: " nums = [1,1,4,2,3], x = 5",
          output: " 2",
          explanation:
            "The optimal solution is to remove the last two elements to reduce x to zero.",
        },
        {
          input: " nums = [5,6,7,8,9], x = 4",
          output: " -1",
        },
        {
          input: " nums = [3,2,20,1,1,3], x = 10",
          output: " 5",
          explanation:
            "The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.",
        },
        {
          input: "",
        },
      ],
      constraints: ["1 <= nums. length <= 1051 <= nums[i] <= 1041 <= x <= 109"],
    },
    {
      id: "1663",
      title: "Smallest String With A Given Numeric Value",
      problemStatement:
        'The numeric value of a lowercase character is defined as its position (1-indexed) in the alphabet, so the numeric value of a is 1, the numeric value of b is 2, the numeric value of c is 3, and so on.\nThe numeric value of a string consisting of lowercase characters is defined as the sum of its characters\' numeric values.\n For example, the numeric value of the string "abe" is equal to 1 + 2 + 5 = 8.\nYou are given two integers n and k.\n Return the lexicographically smallest string with length equal to n and numeric value equal to k.\nNote that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.',
      examples: [
        {
          input: " n = 3, k = 27",
          output: ' "aay"',
          explanation:
            "The numeric value of the string is 1 + 1 + 25 = 27, and it is the smallest string with such a value and length equal to 3.",
        },
        {
          input: " n = 5, k = 73",
          output: ' "aaszz"',
        },
        {
          input: "",
        },
      ],
      constraints: ["1 <= n <= 105n <= k <= 26 * n"],
    },
    {
      id: "1664",
      title: "Ways to Make a Fair Array",
      problemStatement:
        "You are given an integer array nums.\n You can choose exactly one index (0-indexed) and remove the element.\n Notice that the index of the elements may change after the removal.\nFor example, if nums = [6,1,7,4,1]:An array is fair if the sum of the odd-indexed values equals the sum of the even-indexed values.\nReturn the number of indices that you could choose such that after the removal, nums is fair.",
      examples: [
        {
          input: " nums = [2,1,6,4]",
          output: " 1",
          explanation: "",
        },
        {
          input:
            " index 0: [1,6,4] -> Even sum: 1 + 4 = 5. Odd sum: 6. Not fair.",
          output: " index 1: [2,6,4] -> Even sum: 2 + 4 = 6. Odd sum: 6. Fair.",
        },
        {
          input:
            " index 2: [2,1,4] -> Even sum: 2 + 4 = 6. Odd sum: 1. Not fair.",
          output:
            " index 3: [2,1,6] -> Even sum: 2 + 6 = 8. Odd sum: 1. Not fair.",
        },
        {
          input: "is 1 index that you can remove to make nums fair.",
          output: " nums = [1,1,1]",
        },
        {
          input: "3",
          output:
            "ation: You can remove any index and the remaining array is fair.",
        },
        {
          input: " nums = [1,2,3]",
          output: " 0",
          explanation: "You cannot make a fair array after removing any index.",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "Choosing to remove index 1 results in nums = [6",
        "7",
        "4",
        "1]. Choosing to remove index 2 results in nums = [6",
        "1",
        "4",
        "1]. Choosing to remove index 4 results in nums = [6",
        "1",
        "7",
        "4]. 1 <= nums. length <= 1051 <= nums[i] <= 104",
      ],
    },
    {
      id: "504",
      title: "Base 7",
      problemStatement:
        "Given an integer num, return a string of its base 7 representation.",
      examples: [
        {
          input: " num = 100",
          output: ' "202"',
        },
        {
          input: " num = -7",
          output: ' "-10"',
        },
        {
          input: "",
        },
      ],
      constraints: ["-107 <= num <= 107"],
    },
    {
      id: "1669",
      title: "Merge In Between Linked Lists",
      problemStatement:
        "You are given two linked lists: list1 and list2 of sizes n and m respectively.\nRemove list1's nodes from the ath node to the bth node, and put list2 in their place.\nThe blue edges and nodes in the following figure incidate the result:Build the result list and return its head.",
      examples: [
        {
          input:
            " list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]",
          output: " [0,1,2,1000000,1000001,1000002,5]",
          explanation:
            "We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.",
        },
        {
          input:
            " list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]",
          output: " [0,1,1000000,1000001,1000002,1000003,1000004,6]",
          explanation:
            "The blue edges and nodes in the above figure indicate the result.",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "3 <= list1. length <= 1041 <= a <= b < list1. length - 11 <= list2. length <= 104",
      ],
    },
    {
      id: "1670",
      title: "Design Front Middle Back Queue",
      problemStatement:
        "Design a queue that supports push and pop operations in the front, middle, and back.\nImplement the FrontMiddleBack class:Notice that when there are two middle position choices, the operation is performed on the frontmost middle position choice.\n For example:",
      examples: [
        {
          input: "",
          output:
            'tMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle", "popBack", "popFront"]',
        },
        {
          input: "1], [2], [3], [4], [], [], [], [], []]",
        },
        {
          input: " null, null, null, null, 1, 3, 4, 2, -1]",

          explanation: "",
        },
        {
          input: "iddleBackQueue q = new FrontMiddleBackQueue();",
          output: "hFront(1);   // [1]",
        },
        {
          input: "hBack(2);    // [1, 2]",
          output: "hMiddle(3);  // [1, 3, 2]",
        },
        {
          input: "hMiddle(4);  // [1, 4, 3, 2]",
          output: "Front();     // return 1 -> [4, 3, 2]",
        },
        {
          input: "Middle();    // return 3 -> [4, 2]",
          output: "Middle();    // return 4 -> [2]",
        },
        {
          input: "Back();      // return 2 -> []",
          output: "Front();     // return -1 -> [] (The queue is empty)",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "FrontMiddleBack() Initializes the queue. void pushFront(int val) Adds val to the front of the queue. void pushMiddle(int val) Adds val to the middle of the queue. void pushBack(int val) Adds val to the back of the queue. int popFront() Removes the front element of the queue and returns it. If the queue is empty",
        " return -1. int popMiddle() Removes the middle element of the queue and returns it. If the queue is empty",
        " return -1. int popBack() Removes the back element of the queue and returns it. If the queue is empty",
        " return -1. Pushing 6 into the middle of [1",
        " 2",
        " 3",
        " 4",
        " 5] results in [1",
        " 2",
        " 6",
        " 3",
        " 4",
        " 5]. Popping the middle from [1",
        " 2",
        " 3",
        " 4",
        " 5",
        " 6] returns 3 and results in [1",
        " 2",
        " 4",
        " 5",
        " 6]. 1 <= val <= 109At most 1000 calls will be made to pushFront",
        " pushMiddle",
        " pushBack",
        " popFront",
        " popMiddle",
        " and popBack.",
      ],
    },
    {
      id: "1673",
      title: "Find the Most Competitive Subsequence",
      problemStatement:
        "Given an integer array nums and a positive integer k, return the most competitive subsequence of nums of size k.\nAn array's subsequence is a resulting sequence obtained by erasing some (possibly zero) elements from the array.\nWe define that a subsequence a is more competitive than a subsequence b (of the same length) if in the first position where a and b differ, subsequence a has a number less than the corresponding number in b.\n For example, [1,3,4] is more competitive than [1,3,5] because the first position they differ is at the final number, and 4 is less than 5.",
      examples: [
        {
          input: " nums = [3,5,2,6], k = 2",
          output: " [2,6]",
          explanation:
            "Among the set of every possible subsequence: {[3,5], [3,2], [3,6], [5,2], [5,6], [2,6]}, [2,6] is the most competitive.",
        },
        {
          input: " nums = [2,4,3,3,5,4,9,6], k = 4",
          output: " [2,3,3,4]",
        },
        {
          input: "",
        },
      ],
      constraints: [
        "1 <= nums. length <= 1050 <= nums[i] <= 1091 <= k <= nums. length",
      ],
    },
  ]
}