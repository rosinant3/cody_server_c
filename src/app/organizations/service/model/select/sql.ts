export default {
    /* 1? case_, 2? hook, 3? perPage */
    select: `SELECT 
                *
            FROM
                ogranizations
            WHERE 
                id > ?`,
    count: `SELECT count(*) FROM ogranizations`
};
