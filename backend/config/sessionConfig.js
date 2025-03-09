const sessionConfig = {
    secret: "암호화 키", 
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 60 * 1000 //쿠키 지속 시간 : 1시간
    },
    rolling: true   //새로고침 후 시간 갱신
}

module.exports = { sessionConfig }