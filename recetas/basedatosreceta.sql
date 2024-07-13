SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `recetas` (
  `id_receta` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `detalle` varchar(255) NOT NULL,
  `dificultad` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `recetas` (`id_receta`, `titulo`, `detalle`, `dificultad`, `imagen`) VALUES
(1, 'Tarta de manzana', 'Esta tarta de manzana fina y crujiente consiste en una elaboración exquisita. Además, es muy sencilla y rápida de hacer', 'facil', 'tartamanzana.jpg'),
(2, 'Galletas de chocolate', 'Galletas de chocolate, deliciosas, tiernas y jugosas. Además, son unas galletas rápidas y sencillas de preparar, ¡verás que en media hora las tienes listas! Estas galletas gustarán tanto a niños como a mayores', 'media', 'galletaschoco.jpg'),
(3, 'Flan de vainilla', 'El flan es un postre típico de bodegón argentino. Queremos enseñarte la receta básica que no falla, para que puedas disfrutar de un flan perfecto', 'facil', 'flan.jpg'),
(4, 'Cupcake de vainilla', 'Estos cupcakes súper versátiles y prácticos de preparar ya que se pueden combinar infinidad de ingredientes o pueden tener como sabor principal a casi cualquier ingrediente. Su preparación es muy sencilla y su cocción rápida', 'facil', 'cupcake.jpg'),
(5, 'Natillas', 'La natilla de vainilla es uno de los postres más emblemáticos en diversos países. Este postre, siempre ha sido muy simple y rápida su elaboración creando así un delicioso sabor para poder ser compartido en familia.', 'facil', 'natillas.jpg'),
(6, 'Pizza Margarita', 'La pizza es universal, la pizza Margarita sin duda es una tradición pero no por eso deja de ser menos que otras pizzas con más ingredientes', 'media', 'pizza.jpg'),
(7, 'Ensalada César', 'Te explicamos cómo hacer ensalada César con pollo de una forma saludable para que puedas disfrutar de este típico plato sin dejar de lado la nutrición.', 'media', 'cesar.jpg'),
(8, 'Sopa de calabaza', 'En otoño podemos preparar una deliciosa sopa de calabaza casera de una manera muy sencilla y en poco tiempo. Además, es un plato bajo en calorías, nutritivo y saludable.', 'facil', 'sopa.jpg'),
(9, 'Espaguetis a la bolognesa', 'Es un plato de origen italiano. Con pocos ingredientes y en tan solo 15 minutos de cocción, podrás tener en tu mesa una preparación exquisita a la que pocos podrán resistirse', 'facil', 'spaguetis.jpg'),
(10, 'Tarta de espinaca y queso', 'No hay nada como una buena tarta de espinacas que se puede dejar lista con antelación para solucionarnos la cena entre semana cuando llegamos cansados del trabajo o una comida fuera de casa, una reunión familiar o de amigos.', 'media', 'tarta.jpg');

ALTER TABLE `recetas`
  ADD PRIMARY KEY (`id_receta`);
  
  ALTER TABLE `recetas`
  MODIFY `id_receta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
  COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;




