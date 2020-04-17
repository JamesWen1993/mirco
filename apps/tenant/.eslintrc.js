module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/html-closing-bracket-spacing':  ["error", {
            "startTag": "never",
            "endTag": "never",
            "selfClosingTag": "never"
        }],
        "vue/no-dupe-keys": ["error", {//VUE /无重复数据删除密钥
            "groups": []
        }],
        "vue/no-duplicate-attributes": ["error", {//当存在重复的参数时，只有最后一个参数有效。这可能是错误
            "allowCoexistClass": true,
            "allowCoexistStyle": true
        }],
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",//.单行元素的配置禁止在右括号前换行
            "multiline": "always"//多行元素的配置要求在右方括号前换行。
        }]

    }
}
