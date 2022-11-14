export default {
    create: 'INSERT INTO blog_posts (title, userId, url) VALUES (?, ?, REPLACE(?, " ", "-"))'
};  