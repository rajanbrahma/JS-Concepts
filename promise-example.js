function getUser(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                id: id,
                gitHubUserName: 'Rajan'
            });
        }, 2000);
    });
}
function getRepos(gitHubUserName){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Rendering repositories for the user - ${gitHubUserName} from a DB.`);
            resolve({
                id: gitHubUserName,
                repos: ['Repo1','Repo2','Repo3','Repo4','Repo5']
            });
        }, 4000);
    });
}
function getCommits(repoName){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Rendering commits for the repo - ${repoName} from a DB.`);
            resolve({
                id: repoName,
                commits: ['Commit1','Commit2','Commit3','Commit4','Commit5','Commit6']
            });
        }, 6000);
    });
}
function getCommitMsg(commitName){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Rendering commit message for the commit - ${commitName} from a DB.`);
            resolve({
                id: commitName,
                msg: 'My Commit!'
            });
        }, 8000); 
    });
}

getUser(1)
    .then(user => getRepos(user.gitHubUserName))
    .then(Repos => getCommits(Repos.repos[0]))
    .then(commits => {
        console.log(`The commits are ${commits.commits}`);
    })
    .catch(err => {
        return new Error('Error! ',err);
    });

function printCommitMsg(commitMsg){
    console.log(`Commit msg is ${commitMsg.msg}`);
}