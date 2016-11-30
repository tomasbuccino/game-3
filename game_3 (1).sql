-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 30-11-2016 a las 06:45:32
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 5.5.35

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
  `avatar` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `pass_player` varchar(30) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`id_player`, `name_player`, `avatar`, `pass_player`) VALUES
(1, 'tomas', '', '1234'),
(2, 'brenda', '', '1234'),
(3, 'hernan', '', '1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidas`
--

CREATE TABLE `partidas` (
  `player_1` int(11) NOT NULL,
  `player_2` int(11) NOT NULL,
  `id_partida` int(11) NOT NULL,
  `time_player1` int(11) NOT NULL,
  `time_player2` int(11) NOT NULL,
  `time_match` timestamp NULL DEFAULT NULL COMMENT 'Momento en que se crea la partida. Para cuando se hacen la consulta cada 20 seg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `partidas`
--

INSERT INTO `partidas` (`player_1`, `player_2`, `id_partida`, `time_player1`, `time_player2`, `time_match`) VALUES
(2, 1, 193, 0, 0, '2016-11-30 05:21:44'),
(2, 1, 194, 0, 0, '2016-11-30 05:22:34'),
(2, 1, 195, 0, 0, '2016-11-30 05:24:59'),
(2, 1, 196, 0, 0, '2016-11-30 05:25:28'),
(2, 1, 197, 0, 0, '2016-11-30 05:26:39'),
(2, 1, 198, 0, 0, NULL),
(2, 1, 199, 0, 0, NULL),
(2, 1, 200, 0, 0, NULL),
(2, 1, 201, 0, 0, NULL),
(2, 1, 202, 0, 0, NULL),
(2, 1, 203, 0, 0, NULL),
(2, 1, 204, 0, 0, NULL),
(2, 1, 205, 0, 0, NULL),
(2, 1, 206, 0, 0, NULL),
(2, 1, 207, 0, 0, NULL),
(2, 1, 208, 0, 0, NULL);

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
  MODIFY `id_partida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=209;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
