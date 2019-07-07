function getUser(id,callback){
    setTimeout(() => {
        console.log(`Rendering a user(${id}) from a DB.`);
        callback({
            id: id,
            gitHubUserName: 'Rajan'
        });
    }, 2000);
}
function getRepos(gitHubUserName,callback){
    setTimeout(() => {
        console.log(`Rendering repositories for the user - ${gitHubUserName} from a DB.`);
        callback({
            id: gitHubUserName,
            repos: ['Repo1','Repo2','Repo3','Repo4','Repo5']
        });
    }, 4000);
}
function getCommits(repoName,callback){
    setTimeout(() => {
        console.log(`Rendering commits for the repo - ${repoName} from a DB.`);
        callback({
            id: repoName,
            commits: ['Commit1','Commit2','Commit3','Commit4','Commit5','Commit6']
        });
    }, 6000);
}
function getCommitMsg(commitName,callback){
    setTimeout(() => {
        console.log(`Rendering commit message for the commit - ${commitName} from a DB.`);
        callback({
            id: commitName,
            msg: 'My Commit!'
        });
    }, 8000);
}

getUser(40,(user)=>{
    console.log(`Rendered user : ${user.id} - ${user.gitHubUserName}`);
    getRepos(user.gitHubUserName,(userRepo)=>{
        console.log(`${userRepo.id} has the following repos : ${userRepo.repos}`);
        userRepo.repos.forEach(repo => {
            getCommits(repo,(userRepoCommits)=>{
                console.log(`${userRepoCommits.id} has the following commits : ${userRepoCommits.commits}`);
                getCommitMsg(userRepoCommits.commits[0],printCommitMsg);
            });
        });
    });
});

function printCommitMsg(commitMsg){
    console.log(`Commit msg is ${commitMsg.msg}`);
}