<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="owner" content="Basel"/>
        <link rel="stylesheet" href="boxicons.min.css">
        <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
        <link rel="stylesheet" href="index.css"/>
        <title>HomePage</title>
    </head>
    <body>
        <header>
            <a href="index.html" class="logo"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXhJREFUSEvt1r8vBUEQwPHva1BoVILC6/wDOpVCp9GJSKgJ/wL+BIlQSkhQ6URUKn+AVkXhRynRSBTcJLOy1t7bnXVyzbvm3rvs3Gdmbm/e69DS0WnJpRSWuCVN+gT4tBZQAkuMYIuKnWkSJtwKh6gr1IxbYFl7BCyr9qDnST0fAyu5bc+Fw0ofgRkFb4AJa9tz4DrUr9iMp+AU6p6xtNuE94Jz0SK8DraiZjwGl6ImPIT/imbjPhwbDjvVnbat41DXS9yWF/tjyPiwDAYZAv7RJCz3lfl+Kh98eAE4/2d4HrgIYfk+BYwB15qAX/EAsFG9r3PAUJDgO3AF7AEfkVbPAk9VxXcuru51cr80PnwIrCae9z6wHoF/ORb4DRgGZFTeBwl0AZler8BI03CsC873d7ArJnbtO19LxX3Yf8z9Vks3ijbXCzBaOKPDsGdgPLxYt6s3q/dxtyF4rSriIBeWddM6HgcLE5AxegncxuJT/7kKzXRYa/AXg/aCH31NgGkAAAAASUVORK5CYII="/> FreshEat </a>
            <div class="nav_bar">
                <a href="#home" class="header_homepage">Home</a>
                <a href="#about" class="header_about_us">About Us</a>
                <a href="#shop" class="header_shop">Our Shop</a>
                <a href="#review" class="header_review">Our Customers</a>
                <a href="#contact" class="header_contact_us">Contact</a>
            </div>
            <div class="nav_icons">
                <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAoZJREFUSEvllknIjlEUx39fxiwsbAyfKZEhURbfAgspJGxkKoVMoS8lEdlYsUCGIsocKbJgIWxYUTYoylQkUyKFMg/nr/PoerzPc+/71OtbOLv3fc49v3vPPed/bhNtZE1txCUV3BFoAQYBPYDnwAPgGvC5yuZj4H7AVmAq0LkG4ANwBlgDPKlnA2XgFcB2QKeN2SdgGXA45ph9LwLrlKvd6auldy9wCbgLPAQGAEOA8cBSoJ37brCNbkqB1wIvB/b4Yt3jFOBeSbARdv/ngGb3mQ2cjMHz4KHATaCDn24s8CoWBOgNXAH6AO+BwZaJZ2Xr8uALFmCiV6oWP0qAZi4jgevwq1OO2pXMTwV3A1678w5gVR3QzPUEMAd4Cyjet6IY4YlnAKfccTRwtQJ4ZnC/pTFC8Epgp8O6WlW/qwDu71WvpQuAIyknXh+0QvuyNJVsqBPw0b+vBbakgNWP+9yxpwnCiwon7gU89XWzgqv7K1SY6gnARfeYDJyvAJ4GnPV1w4HbKSfuArxxidxvO19SAXwMmAv8cG0vHCD5Pj4NTAe+W3UOcxFJ5auPb7jzARsai1P7WH7SYKVHk0hyOQZ4mUDu68ol2ZQWaHwqe4VWS6sXmQQq1bLH1s+TTBTulMQY5Vrd3X12m8y2xjZbNJ02W1us88WaThoal4PpJDnVVYzzlObjaPMH6z1x5q8ptQtQT8fsiz8IpH6ZlcJjLxDd+TZA7SVxyJu0+JD9udH7d6FNKBVWFB4DZwEE1ZtroL+5NLXuA7cCpcp883D91ub+sFRwLNX574KpQBVfrTnPKv146NQosBghXFWuav9tjQQLIvVTT2tg/JNUR6+m0Scu3MD/B/4JVp9tH2VWMqoAAAAASUVORK5CYII="/></a>
                <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAgdJREFUSEvN1kuoTXEUx/HPlYFHpEQyIhnIxEQiEwYykMHFhJnyLAMDxUCkPAYG0i2RMnJH9w6NhIEoxUAJA4/yiGIgMvAIZ93+u3bbuef893k4Vp3B2Wf91/e/fuuxz5AB2dCAuP4L8CLEJ+wLHvRTjXLGx3GsBHuGjXjejwu0AgfvIVb0G1yWehgHEnAt7vQaPllzzcV7TMUodvwrcHCuYju+YzO+dQl/hRdFjFbjFBLf7hJWPb4V4/Gw3Rw/wvIewnfiSg54Ny4m8Clc7+ASJ7EGPzEPn3LAM/AOsxN0Q03wTHzENIxhW06NC5/zabR+Nxpuac2FUlZsE67VAS9BbLGwczhYI+u7WI0PWIBfdcDhewPr8RnzM0drcWl8zuJQ+cLturrw3ZJqFN934XJG1tGMR5LfMjztBDylAXyb5HqcMWKR0BssxP1GbVdWL5qbcZw7ihMpQMzjyxZZx+yPpN/340I34GiO12l/Zyg94fIj9cTE7HYidXHmUqpxLjiWz95mznWkjvNR66jX9Azy11TfmP+/rC44AsRSmJPqFn+RqjYL+9JqDIWaWl3waRxOkW6l2a4Gvol16eGZ0kh1VeNy0JAwpK9abKciocku1/a1WA1a3r0h454m4Gio8AuL35vKXVfqCBZbKN5W91o02Kq0Xp/0qsYZzZzn0knGeZHbeA0M/AffmVMfIK6tVQAAAABJRU5ErkJggg=="/></a>
            </div>
            
        </header>
    </body>
</html>