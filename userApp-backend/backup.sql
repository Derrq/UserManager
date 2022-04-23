--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: user_table; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_table (
    id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    user_name text NOT NULL,
    date_of_birth date
);


ALTER TABLE public.user_table OWNER TO postgres;

--
-- Name: user_table_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_table_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_table_id_seq OWNER TO postgres;

--
-- Name: user_table_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_table_id_seq OWNED BY public.user_table.id;


--
-- Name: userprofile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.userprofile (
    id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    user_name text NOT NULL,
    date_of_birth date
);


ALTER TABLE public.userprofile OWNER TO postgres;

--
-- Name: userprofile_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.userprofile ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.userprofile_id_seq
    START WITH 3
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_table id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_table ALTER COLUMN id SET DEFAULT nextval('public.user_table_id_seq'::regclass);


--
-- Data for Name: user_table; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_table (id, first_name, last_name, user_name, date_of_birth) FROM stdin;
41	Derrick	Onyeani	Lord_of_Coins	1995-06-19
42	Derrick	Onyeani	Ruler	1995-06-19
43	Ukachukwu Derrick	Onyeani-Nwosu	Hokage	2022-04-01
44	Derrick	Onyeani	Ekpe	1995-04-01
45	Frank	Lucas	American Gangstar	2022-04-05
46	Frank	Derrick	Hova	2022-04-04
47	Jide	Sosan	ROnnie	2021-04-17
48	Emperor	Zhu	Emp_Zhu	1996-04-21
49	Tobi	Agbola	Kvng_tobi	2021-11-18
\.


--
-- Data for Name: userprofile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.userprofile (id, first_name, last_name, user_name, date_of_birth) FROM stdin;
1	Derrick	Onyeani	Derrqq	1995-06-19
92	tester	0001	tester00007	1922-04-17
\.


--
-- Name: user_table_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_table_id_seq', 49, true);


--
-- Name: userprofile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.userprofile_id_seq', 3, false);


--
-- Name: user_table user_table_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_table
    ADD CONSTRAINT user_table_pkey PRIMARY KEY (id);


--
-- Name: userprofile userprofile_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.userprofile
    ADD CONSTRAINT userprofile_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

