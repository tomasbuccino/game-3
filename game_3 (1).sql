-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 27-11-2016 a las 18:20:47
-- Versión del servidor: 10.1.10-MariaDB
-- Versión de PHP: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `game_3`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `id_player` int(11) NOT NULL,
  `name_player` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `avatar` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`id_player`, `name_player`, `avatar`) VALUES
(1, 'tomas', ''),
(2, 'brenda', ''),
(3, 'hernan', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidas`
--

CREATE TABLE `partidas` (
  `player_1` int(11) NOT NULL,
  `player_2` int(11) NOT NULL,
  `id_partida` int(11) NOT NULL,
  `puntos_player_1` int(11) NOT NULL,
  `puntos_player_2` int(11) NOT NULL,
  `pieza_rnd` int(11) NOT NULL,
  `time_player1` time NOT NULL,
  `time_player2` time NOT NULL,
  `time_match` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Momento en que se crea la partida. Para cuando se hacen la consulta cada 20 seg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `partidas`
--

INSERT INTO `partidas` (`player_1`, `player_2`, `id_partida`, `puntos_player_1`, `puntos_player_2`, `pieza_rnd`, `time_player1`, `time_player2`, `time_match`) VALUES
(0, 0, 1, 0, 0, 0, '00:00:00', '00:00:00', '2016-11-17 13:54:01'),
(0, 0, 2, 0, 0, 0, '00:00:00', '00:00:00', '2016-11-17 13:54:01'),
(0, 0, 3, 0, 0, 0, '00:00:00', '00:00:00', '2016-11-17 13:54:01'),
(0, 0, 4, 0, 0, 0, '00:00:00', '00:00:00', '2016-11-17 13:54:01'),
(0, 0, 5, 0, 0, 0, '00:00:00', '00:00:00', '2016-11-17 13:54:01'),
(0, 0, 6, 0, 0, 0, '00:00:00', '00:00:00', '2016-11-17 13:54:01'),
(0, 0, 7, 0, 0, 0, '00:00:00', '00:00:00', '2016-11-17 13:54:01'),
(0, 0, 8, 0, 0, 0, '00:00:00', '00:00:00', '2016-11-17 13:54:01');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`id_player`);

--
-- Indices de la tabla `partidas`
--
ALTER TABLE `partidas`
  ADD PRIMARY KEY (`id_partida`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `id_player` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `partidas`
--
ALTER TABLE `partidas`
  MODIFY `id_partida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
