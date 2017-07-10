async function getUserInfo(ctx) {
    ctx.body = {
        name: 'LiuLang',
        gender: 'male',
        age: 21
    }
}

export default {getUserInfo}
