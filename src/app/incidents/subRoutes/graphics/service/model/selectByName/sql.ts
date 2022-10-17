export default {
    /* 1? case_, 2? hook, 3? perPage */
    selectEmail: `SELECT 
                    name
                  FROM
                    ogranizations
                  WHERE 
                    name = ?`,
};
