<?php

    class Router{
        private $method;
        private $controller;
        private $contentData;
        private $idContact;

        public function __construct(){
            $this->controller = new ContactController();
            $this->contentData = file_get_contents('php://input');
            $this->method = $_SERVER["REQUEST_METHOD"];
            $this->idContact = $_GET['id'] ?? null;
        }

        public function router(){

            switch($this->method){
                case "GET":

                    if (isset($this->idContact)) {
                        return $this->controller->getContactById($this->idContact);
                    }
                    return $this->controller->getAllContacts();

                case "POST":
                    $data = json_decode($this->contentData, true);

                    return $this->controller->postContact($data);
                case "DELETE":
                    return $this->controller->deleteContactById($this->idContact);
                case "PUT":
                    $data = json_decode($this->contentData, true);
                    return $this->controller->updateContactById($data, $this->idContact);
            }
        }
    }