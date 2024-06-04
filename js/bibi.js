let svg = '<svg  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="is-badge"><path  d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z" fill="#1da1f2"></path></svg>'
let total = 0
let nowNum = 0
let items = []
//let page = 1
let Url = 'https://kaxiya.top/api/v1/memo?creatorId=1&page=' // 记住替换为你的API链接

window.addEventListener('DOMContentLoaded', () => {
    getNew();
});

function getNew() {
    let bibi = document.getElementById('bibi');
    try {
        bibi.removeChild(document.getElementById('more'))
    } catch (error) { }

    bibi.innerHTML += '<div id="bb_loading"><img src="/assets/loading3.gif" alt="bb_loading"></div>';

    fetch(Url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch');
            }
            return res.json();
        })
        .then((res) => {
            total = res.length;
            items = res;
            nowNum += items.length;
            // if (page == 1) {
            //     document.querySelector('.bb-info').innerHTML = '<svg style="width:1.20em;height:1.20em;top:5px;fill:currentColor;overflow:hidden;position:relative"><use xlink:href="#icon-chat"></svg> 我的碎碎念(' + total + ')';
            // }
            // page += 1;
            bb(); // 将渲染函数调用移至fetch请求成功后
            if (nowNum < total) {
                document.getElementById('bibi').innerHTML += '<button id="more" onclick="getNew()">再翻翻</button>';
            }
            document.getElementById('bibi').removeChild(document.getElementById('bb_loading'));
        })
        .catch(error => {
            console.error('Fetch error:', error);
            // 可以在此处处理错误，例如显示错误信息给用户
        });
}


// fetch(url + '/api/v1/memo?creatorId=1&tag=说说&limit=30').then(res => res.json()).then(res => { // 注意修改域名和用户id
//     let items = [],
//         html = '',
//         icon = '<svg viewBox="0 0 512 512"xmlns="http://www.w3.org/2000/svg"class="is-badge icon"><path d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z"fill="#1da1f2"></path></svg>';
//     res.forEach(item => { items.push(Format(item)) });
//     if (items.length == 30) document.querySelector('.limit').style.display = 'block';
//     items.forEach(item => {
//         html += `<div class="talk_item"><div class="talk_meta"><img class="no-lightbox no-lazyload avatar" src="https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5"><div class="info"><span class="talk_nick">Leonus${icon}</span><span class="talk_date">${item.date}</span></div></div><div class="talk_content">${item.content}</div><div class="talk_bottom"><div><span class="talk_tag"># ${item.tag}</span></div><a href="javascript:;"onclick="goComment('${item.text}')"><span class="icon"><i class="fa-solid fa-message fa-fw"></i></span></a></div></div>` // 注意修改头像链接和名称
//     })
//     document.getElementById('talk').innerHTML = html
// })

// 渲染数据
function bb() {
    let bb = document.getElementById('bb-main')
    items.forEach((item) => {
        //items.push(Format(item))
        let div = document.createElement('div')
  
        let date = getTime(new Date(item.createdTs * 1000).toString())
        div.className = 'bb-card'
        //div.innerHTML = '<div class="card-header"><div class="avatar"></div><div class="name">' + item.username + '</div>' + svg + '<div class="card-time">' + item.time + '</div></div><div class="card-content">' + item.content + '</div><div class="card-footer"></div>';
        //div.innerHTML = '<div class="card-content">' + item.content + '</div><div class="card-time">' + item.time + '</div><div class="name">' + item.username + '</div>';
//div.innerHTML = '<div class="card-content">' + item.content + '</div>';
        div.innerHTML = '<div class="card-header"><div class="avatar"><img class="nofancybox"src="' + "https://jsd.onmicrosoft.cn/gh/kaxiya1021/tuchuang@main/img/69b3f9ef8932140fb04ce25c1276100.jpgg" + '"></div><div class="name">' + item.creatorName + '</div>'  + '<div class="card-time">' + date + '</div></div><div class="card-content">' + item.content + '</div><div class="card-footer">' + '</div></div>'
        bb.appendChild(div)
    })
}


 // 页面评论
 function goComment(e) {
    var n = document.querySelector(".el-textarea__inner")
    n.value = `> ${e}\n\n`;
    n.focus();
    btf.snackbarShow("无需删除空行，直接输入评论即可", !1, 2e3);
}

// 页面内容格式化
function Format(item) {
    let date = getTime(new Date(item.createdTs * 1000).toString()),
        content = item.content,
        tag = item.content.match(/\{(.*?)\}/g),
        imgs = content.match(/!\[.*\]\(.*?\)/g), 
        text = ''
        username = item.creatorUsername
    if (imgs) imgs = imgs.map(item => { return item.replace(/!\[.*\]\((.*?)\)/, '$1') })
    if (item.resourceList.length) {
        if (!imgs) imgs = []
        item.resourceList.forEach(t => {
            if (t.externalLink) imgs.push(t.externalLink)
            else imgs.push(`${url}/o/r/${t.id}/${t.publicId}/${t.filename}`)
        })
    }
    text = content.replace(/#(.*?)\s/g, '').replace(/\!?\[(.*?)\]\((.*?)\)/g, '').replace(/\{(.*?)\}/g, '')
    content = text.replace(/\[(.*?)\]\((.*?)\)/g, `<a href="$2">@$1</a>`);
    if (imgs) {
        content += `<div class="zone_imgbox">`
        imgs.forEach(e => content += `<a href="${e}" data-fancybox="gallery" class="fancybox" data-thumb="${e}"><img class="no-lazyload" src="${e}"></a>` // 2023-02-06更新
        )
        content += '</div>'
    }
    return {
        content: content,
        tag: tag ? tag[0].replace(/\{(.*?)\}/,'$1') : '无标签',
        date: date,
        text: text.replace(/\[(.*?)\]\((.*?)\)/g, '[链接]' + `${imgs?'[图片]':''}`),
        username: username
    }
}

// 页面时间格式化
function getTime(time) {
    let d = new Date(time),
        ls = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()];
    for (let i = 0; i < ls.length; i++) {
        ls[i] = ls[i] <= 9 ? '0' + ls[i] : ls[i] + ''
    }
    if (new Date().getFullYear() == ls[0]) return ls[1] + '月' + ls[2] + '日 ' + ls[3] +':'+ ls[4]
    else return ls[0] + '年' + ls[1] + '月' + ls[2] + '日 ' + ls[3] +':'+ ls[4]
}

// content格式化
// function contentFormat(s) {
//     let br = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
//     let re_forimg = /<img(.*?)src=[\"|\']?(.*?)[\"|\']?(.*?)>|!\[(.*?)\]\((.*?)\)/g;
//     let getImgUrl = /(http(.*).[jpg|png|gif])/g;
//     let ls = s.match(getImgUrl)
//     s = s.replace(re_forimg, '')
//     s = s.replace(br, '')

//     let html = '<br>'
//     if (ls) {
//         ls.forEach((e) => {
//             html += '<a href="' + e + '" target="_blank" data-fancybox="group" class="fancybox"><img src="' + e + '"></a>'
//         })
//     }
//     s += html
//     return s
// }