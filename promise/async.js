async function getCica(){
    return 'cica';
};

async function getScreenInfo() {
    const users = await getUsers();
    const badges = await getBadges();
    return users.map(user => (
        Object.assign({}, user, {badges: []});
    ));
}

main().then(res => console.log(res))