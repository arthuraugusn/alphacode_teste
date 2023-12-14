<?php

    class ContactController{
        private $contactModel;

        public function __construct(){
            $this->contactModel = new ContactModel();
        }

        public function getAllContacts(){
            $rs = $this->contactModel->getAll();

            if(!empty($rs) && $rs){
                return $rs;
            }
            http_response_code(404);
            return $rs;
        }

        public function getContactById($id){
            $rs = $this->contactModel->getById($id);

            if(!empty($rs) && $rs){
                return $rs;
            }
            http_response_code(404);
            return "Contact was not found";
        }

        public function postContact($contact){

            

            if (!empty($contact) && $contact) {
                $rs = $this->contactModel->post($contact);
                
                if (!empty($rs) && $rs) {
                    $dataHoraAtual = date('d-m-Y H:i:s');
                    http_response_code(201);
                    return [$rs, "created_at"=>$dataHoraAtual];
                }
            }

            http_response_code(400);
            return "Fields were not filled in";

        }
        public function deleteContactById($id){
            
            if (!empty($id) && $id && $id ?? null) {
                $rs = $this->contactModel->delete($id);

                if ($rs == 1) {
                    http_response_code(204);
                }else if ($rs == 0){
                    http_response_code(400);
                }

                
            }else{
                http_response_code(400);
                return "Id is required";
            }
            
        }
        public function updateContactById($contact, $id){
            if (!empty($contact) && $contact && $contact ?? null && !empty($id) && $id && $id ?? null) {
                $rs = $this->contactModel->updateById($contact, $id);

                if(!empty($rs)){
                    $dataHoraAtual = date('d-m-y h:i:s');
                    return [$rs, "update_at"=>$dataHoraAtual];
                }
            }
            http_response_code(404);
    
        }
    }