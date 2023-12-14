<?php

    class Database{

        private $servername;
        private $username;
        private $password;
        private $dbname;
        private $port;

        public function __construct(){
            $this->servername =  "localhost";
            $this->username  = "root";
            $this->password = "";
            $this->dbname = "db_alphacode";
            $this->port = "3306";
        }

        public function connect(){
        
            
            try {

                $url = "mysql:host={$this->servername}:{$this->port};dbname={$this->dbname}";
                
                $connection = new PDO($url, $this->username, $this->password);

                return $connection;


            } catch (\Exception $ex) {
                echo "Connection error: " . $ex->getMessage();
            }
        }

    }