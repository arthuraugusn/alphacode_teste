<?php

    class ContactModel{
        protected $connection;
        protected $script_sql;

        public function __construct() {
            $this->connection = (new Database())->connect();
        }

        public function getAll(){
            try {
                $this->script_sql = 'SELECT * FROM tbl_contact';

                $process = $this->connection->prepare($this->script_sql);

                $process->execute();

                return $process->fetchAll(\PDO::FETCH_OBJ);    
                
                
                
            } catch (\Exception $ex) {
                echo "Connection error: " . $ex->getTraceAsString();
            }
        }
        public function getById($id){
            try {
                $this->script_sql = "SELECT * FROM tbl_contact WHERE id=$id";

                $process = $this->connection->prepare($this->script_sql);

                $process->execute();

                return $process->fetch(\PDO::FETCH_OBJ);

            } catch (\Throwable $th) {
                //throw $th;
            }
        }

        public function post($contact_obj){
            try {

                $columns = implode(',', array_keys($contact_obj));
                
                $values = ':' . implode(', :', array_keys($contact_obj));

                $this->script_sql = "INSERT INTO tbl_contact ($columns) VALUES ($values)";

                $process = $this->connection->prepare($this->script_sql);

                foreach ($contact_obj as $key => $value){
                    $process->bindValue(":$key", $value);
                }

                if ($process->execute()) {
                    return $contact_obj;
                }
                
            } catch (\Throwable $th) {
                //throw $th;
            }
        }
        public function delete($id){
            try {
                $this->script_sql = "DELETE FROM tbl_contact WHERE id=$id";

                $process = $this->connection->prepare($this->script_sql);
                $process->execute();
                
                return $process->rowCount();

            } catch (\Throwable $th) {
                //throw $th;
            }
        }
        public function updateById($contact_obj, $id){
                try {
                    $columns_values = implode(', ', array_map(function ($key){
                        return "$key = :$key";
                    }, array_keys($contact_obj)));

                    $this->script_sql = "UPDATE tbl_contact SET $columns_values WHERE id=$id";

                    $process = $this->connection->prepare($this->script_sql);

                    foreach($contact_obj as $key => $value){
                        $process->bindValue(":$key", $value);
                    }

                    $process->execute();

                    if ($process->rowCount()) {
                        
                        return $contact_obj;
                    }

                } catch (\Throwable $th) {
                    //throw $th;
                }
        }
    }