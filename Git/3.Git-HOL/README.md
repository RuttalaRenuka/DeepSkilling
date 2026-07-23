Git Branching and Merging Lab
Objectives
Explain branching and merging in Git.
Explain how to create a Branch Request in GitLab.
Explain how to create a Merge Request in GitLab.
Create a new branch, make changes, and merge it into the master (or main) branch.
Prerequisites
Before starting this lab, ensure you have:

Git installed
Git Bash installed
P4Merge configured as the Git merge/diff tool (Windows)
A GitHub account (Do not use Cognizant credentials)
Branching
Step 1: Create a New Branch
git branch GitNewBranch
Step 2: List Local and Remote Branches
git branch -a
Observation

* indicates the currently active branch.
Local branches appear normally.
Remote branches appear under remotes/origin/.
Step 3: Switch to the New Branch
git checkout GitNewBranch
Or (new Git versions)

git switch GitNewBranch
Step 4: Create a New File
echo "This file is created in GitNewBranch." > branchfile.txt
Step 5: Add the File
git add branchfile.txt
Step 6: Commit the Changes
git commit -m "Added branchfile.txt in GitNewBranch"
Step 7: Check Repository Status
git status
Expected Output

On branch GitNewBranch
nothing to commit, working tree clean
Merging
Step 1: Switch Back to Master
git checkout master
Or

git switch master
Step 2: View Differences Between Master and Branch
git diff master GitNewBranch
Step 3: View Visual Differences Using P4Merge
git difftool master GitNewBranch
P4Merge opens automatically and displays the visual comparison.

Step 4: Merge the Branch into Master
git merge GitNewBranch
Expected output:

Updating xxxxxxx..yyyyyyy
Fast-forward
 branchfile.txt | 1 +
Step 5: View Commit History
git log --oneline --graph --decorate
Example

* abc1234 (HEAD -> master) Added branchfile.txt in GitNewBranch
* def5678 Initial commit
Step 6: Delete the Branch
git branch -d GitNewBranch
Step 7: Verify Repository Status
git status
Expected Output

On branch master
nothing to commit, working tree clean
GitLab Branch Request
A Branch Request is the process of creating a new branch from the default branch to work on a feature or bug fix without affecting the main codebase.

Steps
Open your GitLab repository.
Click Repository → Branches.
Click New Branch.
Enter the branch name.
Select the source branch (usually master or main).
Click Create Branch.
The new branch is now available for development.

GitLab Merge Request
A Merge Request (MR) is used to merge changes from one branch into another after code review.

Steps
Push your branch to GitLab.
git push origin GitNewBranch
Open the repository in GitLab.
Click Merge Requests.
Select New Merge Request.
Choose:
Source Branch: GitNewBranch
Target Branch: master
Click Compare Branches.
Review the changes.
Add a title and description.
Click Create Merge Request.
After approval, click Merge.
Commands
Task	Command
Create Branch	git branch GitNewBranch
Switch Branch	git checkout GitNewBranch
List Branches	git branch -a
Create File	echo "Text" > branchfile.txt
Add File	git add branchfile.txt
Commit	git commit -m "Added branchfile.txt in GitNewBranch"
Check Status	git status
Switch to Master	git checkout master
Compare Branches	git diff master GitNewBranch
Visual Compare	git difftool master GitNewBranch
Merge Branch	git merge GitNewBranch
View History	git log --oneline --graph --decorate
Delete Branch	git branch -d GitNewBranch
Push Branch	git push origin GitNewBranch
Result
Creating a new branch.
Making changes in the branch.
Committing the changes.
Comparing differences using Git and P4Merge.
Merging the branch into the master branch.
Viewing commit history.
Deleting the merged branch.
Understanding the Branch Request and Merge Request workflow in GitLab
