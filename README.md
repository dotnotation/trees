# trees
Code along with Colt Steele's JS algorithms and data structures masterclass

What are trees?
- Types
	- there are so many types however we focus on the following
	- tree
	- binary tree
		- each node can have at most two children 
	- binary search tree
		- special case of a binary tree
		- each node can have at most two children 
		- sorted in a particular way 
		- used to store data that is comparable/ sortable 
		- if you take any node on the tree,  every item that is less than that node is located to the left, and every item that is greater than is to the right 
        - great insertion and searching as it is sorted
        - the root is going to be a half way point so it makes it easier to compare and traverse 
        - compare and go to the left or the right, each time, you are cutting your options in half 
- Great for web scraping nested HTML
-  a step up from linked lists
- a data structure that consists of nodes in a parent/child relationship or a hierarchical structure
- think of a branching tree but upside down
	- root - the top node from which everything branches from
	- child - a node directly connected to another node when moving away from the root
	- parent - the converse notion of a child
	- sibling - a group of nodes with the same parent
	- leaf - a node with no children/ the end of the line 
	- edge - the connection between one node and another
	- basically root connects to a parent which connects to a child, think of how state works in React
- nonlinear 
	- there can be many ways to reach a branching path 
	- a linked list is linear as there is only one direction you can go 
- not a tree
	- if there are nodes that reference each other on the same level  (sibling) aka they reference nodes that are not below them (children)
		- a node on a tree can only reference their children 
	- there can only be one root/ entry point
- USES
	- HTML DOM
		- the connection between each element 
		- think of how the body contains different div which have divs inside that, etc. 
	- network routing
	- abstract syntax trees
	- artificial intelligence 
	- folders in operating system
	- JSON

- Big O
   - insertion O(log n) (not guaranteed)
   - searching O(log n) (not guaranteed)