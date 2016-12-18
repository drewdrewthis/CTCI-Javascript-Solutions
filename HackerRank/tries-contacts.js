'use strict';

/*

Create contacts app. 
- Must have two functions:
-- add name function; input: string => stores in application.
-- find partial; input: string => partial name search. Must count number of contacts starting with partial
--> Print count on new line


Notes:
- Create node class
- Add:
- Start at root
-- For each letter of string
---- check if node exists for hashKey
---- if it does, look at that node and check next letter
---- if not, create that node/hash
---- repeat
---- for last letter, set isComplete to true

- Find:
--- Move through trie to last letter of partial
--- If letter in partial doesn't exist in trie, return 0
--- At last letter, do DFS to find all isCompleted ends.
--- Count these.
--- Return.
---> O(length of partial + all child nodes)

Alternative:
-- On add, keep track of the number of times that node has been used in trie
-- On find, go to last letter of partial (return 0 if you don't make it to end)
-- Return total number of times for that node.
--> O(length of partial)

*/

function Node() {
	this.hashMap = {};
	this.isCompleted = false;
	this.useCount = 1;
}

function ContactList() {
    this.root = new Node();
    this.add = function(string) {

        var node = this.root;

        for(let letter of string) {
            if(node.hashMap[letter]) {
                node.hashMap[letter].useCount++;
            }
            else {
                node.hashMap[letter] = new Node();
            }
            node = node.hashMap[letter];
            
        }
        node.isCompleted = true;
    }

    this.find = function(partial) {

        var node = this.root;

        for(let letter of partial) {
            if(node.hashMap[letter]) {
                node = node.hashMap[letter];
            }
            else {
                // Fails. This partial is not a substring of any contact
                return console.log(0);
            }
        }

        return console.log(node.useCount);
    }
}

let contacts = new ContactList();

contacts.add("hack");
contacts.add("hackerrank");
contacts.find("hac");
contacts.find("hak");
