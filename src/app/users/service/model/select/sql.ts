export default {
    /* 1? case_, 2? hook, 3? perPage */
    select: `SELECT DISTINCT
                incident.idincident, 
                incident.color, ?`,
    count: `SELECT count(*) FROM incident WHERE incident.case_ = ?`
};
