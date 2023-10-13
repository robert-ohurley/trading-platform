create database nft;

use nft;

CREATE TABLE IF NOT EXISTS `user` (
    Id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
    Username VARCHAR(20) UNIQUE NOT NULL,
    Password TEXT NOT NULL,
    Email VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS `asset` (
    Id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
    Name VARCHAR(80) NOT NULL UNIQUE,
    Description TEXT NOT NULL,
    Price FLOAT NOT NULL,
    Category VARCHAR(30) NOT NULL,
    Img VARCHAR(20) NOT NULL
);

 
CREATE TABLE IF NOT EXISTS `transaction` (
    Id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
    user_id INT NOT NULL,
    transaction_hash VARCHAR(80) UNIQUE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);


INSERT INTO `asset` (Name, Description, Price, Category, Img) VALUES
('Bling', 'A visually stunning piece of digital art that represents the convergence of style and modern tech.', 0.034, 'Digital art', '/nft1.png'),
('Bling Bits', 'This piece represents a blend of ancient aesthetics with the bling culture of the modern era.', 0.034, 'Digital art', '/nft2.png'),
('Futuristic Realism', 'A true masterpiece, depicting realistic future scenarios with a touch of vivid imagination.', 0.797, 'Digital art', '/nft3.png'),
('Thunder', 'A powerful piece showcasing the raw and unforgiving force of nature, encapsulated in a moment.', 0.432, 'Digital art', '/nft4.png'),
('Digital Animals', 'A mesmerizing journey to a mythical realm where digital unicorns roam freely.', 0.25, 'Digital art', '/nft5.png'),
('Secret Rocks', 'Mystical stones with secretive inscriptions, offering a glimpse into ancient knowledge.', 0.678, 'Digital art', '/nft6.png'),
('Crypto Potato', 'A quirky and fun representation of the crypto world, symbolizing potential and growth.', 0.315, 'Digital art', '/nft7.png'),
('Nova Auroras', 'Witness the celestial dance of lights in the far reaches of our universe, a truly magical experience.', 0.321, 'Utility', '/nft8.png'),
('Reflected Darkness', 'A surreal exploration of light and its reflections, creating a harmonious balance between reality and illusion.', 0.512, 'Utility', '/nft9.png'),
('Spells of Misery', 'A spellbinding voyage to the creation, symbolizing the genesis of life and the universe.', 0.035, 'Utility', '/nft10.png'),
('Dose of Ethics', 'A daily dose of artistry and imagination, enriching your life with a splash of colors and emotions.', 0.087, 'Utility', '/nft11.png'),
('Futuristic Depreciation', 'Depicts speculative futures imbued with a sense of realism, sparking curiosity and wonder.', 0.797, 'Utility', '/nft12.png'),
('Thunder NFT', 'Captures the essence of a thunderstorm, a wild and untamed representation of nature’s fury.', 0.432, 'Utility', '/nft13.png'),
('Digital Unicorns', 'Embark on an enchanted journey through a digital landscape inhabited by mythical unicorns.', 0.25, 'Profile pictures', '/nft14.png'),
('Secret Stones', 'Discover the ancient secrets encrypted within the mystical stones, unlocking the mysteries of the past.', 0.678, 'Profile pictures', '/nft15.png'),
('Crypto Conjac', 'Embrace the whimsical world of cryptocurrencies with this fun and lighthearted piece.', 0.315, 'Profile pictures', '/nft16.png'),
('Nova Auroraborealis', 'Explore the ethereal beauty of the auroras, witnessing the universe’s artistry in its purest form.', 0.321, 'Profile pictures', '/nft17.png'),
('Reflected Light', 'Experience the transient beauty of light reflections, unveiling the delicate dance between light and surfaces.', 0.512, 'Profile pictures', '/nft18.png'),
('Spells of Genesis', 'Dive into the origins of the universe, exploring the intricate weave of creation and existence.', 0.035, 'Profile pictures', '/nft19.png'),
('Dose of Art', 'Indulge in the richness of artistic expressions, feeding your soul with creativity and inspiration.', 0.087, 'Profile pictures', '/nft20.png');


INSERT INTO `user` (Username, Password, Email) VALUES
('admin', '$2a$10$YhCeH4mZL8fobRxExOoO/.E1HGR1P.xVXaP4KBjuiZjc7ng7BPNIu', 'admin@cryptobrotha.com')
