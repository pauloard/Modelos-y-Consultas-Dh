module.exports = (sequelize,  DataTypes) => {
    const Genre = sequelize.define('Genre', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        name: DataTypes.STRING,
        ranking: DataTypes.INTEGER,
        active: DataTypes.INTEGER
    },
    {
        tableName: 'genres',
        timestamps: false
    },
    );

    return Genre;
}