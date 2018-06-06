
module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      'post',
      [
        {
          title: 'Title 1',
          content: 'Content 1',
          author: 'Author 1',
          created_at: '2004-10-19 10:23:54+02',
          updated_at: '2004-10-19 10:23:54+02',
        },
        {
          title: 'Title 2',
          content: 'Content 2',
          author: 'Author 2',
          created_at: '2004-10-19 10:23:54+02',
          updated_at: '2004-10-19 10:23:54+02',
        },
        {
          title: 'Title 3',
          content: 'Content 3',
          author: 'Author 3',
          created_at: '2004-10-19 10:23:54+02',
          updated_at: '2004-10-19 10:23:54+02',
        },
      ],
      {},
    );
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('post', null, {});
  },
};
