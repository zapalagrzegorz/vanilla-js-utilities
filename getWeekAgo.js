    /**
     * 
     * @param {today} date 
     * @returns string of a day weeek formatted: year-week-day of a day weeke
     */
    function getWeekAgo() {
        const today = new Date();
   
        const weekAgo =  new Date(today.setDate(today.getDate() - 7));
    
        const weekAgoDay = weekAgo.getDate() < 10 ? '0'+weekAgo.getDate() : weekAgo.getDate();
        const weekAgoMonth = weekAgo.getMonth() < 10 ? '0'+ (weekAgo.getMonth()+1) : weekAgo.getMonth();
        const weekAgoYear = weekAgo.getFullYear();
    
        return `${weekAgoYear}-${weekAgoMonth}-${weekAgoDay}`;

    }
