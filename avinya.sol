// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SocialMedia {
    // Constants
    uint256 public constant THRESHOLD = 2; // Upvotes required to finalize a post
    uint256 public constant CREDIBILITY_FACTOR = 3; // Multiplier for credibility score

    // Structs
    struct Post {
        uint256 postId;
        address userId;
        uint256 upvotes;
        uint256 downvotes;
        bool isFinalized;
    }//comment

    struct User {
        uint256 credibilityScore;
        uint256 successfulPosts;
    }

    // Mappings
    mapping(uint256 => Post) public posts; // postId => Post
    mapping(address => User) public users; // userId => User
    mapping(uint256 => mapping(address => bool)) public hasVoted; // postId => userId => hasVoted

    // Events
    event PostCreated(uint256 postId, address userId);
    event Voted(uint256 postId, address userId, bool isUpvote, uint256 weight);
    event PostFinalized(uint256 postId);

    // Function to create a post
    function createPost(uint256 postId) public {
        require(posts[postId].userId == address(0), "Post already exists");
        posts[postId] = Post(postId, msg.sender, 0, 0, false);
        emit PostCreated(postId, msg.sender);
    }

    // Function to vote on a post
    function vote(uint256 postId, bool isUpvote) public {
        require(!hasVoted[postId][msg.sender], "Already voted");
        Post storage post = posts[postId];
        require(!post.isFinalized, "Post is finalized");

        // Calculate vote weight based on user's credibility
        uint256 weight = users[msg.sender].credibilityScore + 1; // +1 to ensure non-zero weight

        if (isUpvote) {
            post.upvotes += weight;
        } else {
            post.downvotes += weight;
        }

        // Mark user as having voted
        hasVoted[postId][msg.sender] = true;
        emit Voted(postId, msg.sender, isUpvote, weight);

        // Check if post reaches threshold and finalize if necessary
        if (post.upvotes >= THRESHOLD) {
            finalizePost(postId);
        }
    }

    // Function to finalize a post
    function finalizePost(uint256 postId) internal {
        Post storage post = posts[postId];
        require(post.upvotes >= THRESHOLD, "Threshold not met");
        require(!post.isFinalized, "Already finalized");

        post.isFinalized = true;
        users[post.userId].successfulPosts++;
        updateCredibility(post.userId);
        emit PostFinalized(postId);
    }

    // Function to update user credibility
    function updateCredibility(address userId) internal {
        User storage user = users[userId];
        user.credibilityScore = user.successfulPosts * CREDIBILITY_FACTOR;
    }

    // Function to get post details
    function getPost(uint256 postId) public view returns (Post memory) {
        return posts[postId];
    }

    // Function to get user details
    function getUser(address userId) public view returns (User memory) {
        return users[userId];
    }
}