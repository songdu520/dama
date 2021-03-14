<?php

    class demoController{
        function show(){
            $model = new demoModel();
            $data = $model->getData();

            $view = new demoView();
            $view->showData($data);
        }
    }
?>