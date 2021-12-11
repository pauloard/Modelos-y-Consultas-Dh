module.exports = (sequelize,  DataTypes) => {
    const Movie = sequelize.define('Movie', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        title: DataTypes.STRING,
        rating: DataTypes.DECIMAL,
        awards: DataTypes.INTEGER,
        release_date: DataTypes.DATE,
        length: DataTypes.INTEGER,
        genre_id: DataTypes.INTEGER

    },
    {
        tableName: 'movies',
        timestamps: false
    });

    return Movie;
}