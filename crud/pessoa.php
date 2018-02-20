<?php
class Pessoa
{
    private $conn;
    function __construct() {
    session_start();
    $servername = "localhost";
    $dbname = "crud";
    $username = "root";
    $password = "";
  

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
      if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
       }else{
        $this->conn=$conn;  
       }

    }


    
    public function pessoa_list($page=1,$search_input=''){
       $perpage=10;
       $page=($page-1)*$perpage;
       
       $search='';
       if($search_input!=''){
         $search="WHERE ( pessoa_nome LIKE '%$search_input%')";  
       }
      
     
       $sql = "SELECT * FROM pessoas $search ORDER BY pessoa_id desc LIMIT $page,$perpage";
     
       $query=  $this->conn->query($sql);
       $pessoa=array();
       if ($query->num_rows > 0) {
       while ($row = $query->fetch_assoc()) {
          $pessoa['pessoa_data'][]= $row;
       }
       }
       
       
    $count_sql = "SELECT COUNT(*) FROM pessoas $search";
    $query=  $this->conn->query($count_sql);
    $total = mysqli_fetch_row($query);
    $pessoa['total'][]= $total;
       
       
    return $pessoa;  
    }
    
    public function create_pessoa_info($post_data=array()){
         
    
       $pessoa_nome='';
       if(isset($post_data->pessoa_nome)){
       $pessoa_name= mysqli_real_escape_string($this->conn,trim($post_data->pessoa_name));
       }
       
       $sql="INSERT INTO pessoas (pessoa_name, email_address, contact,country,gender) VALUES ('$pessoa_name', '$email_address', '$contact','$country','$gender')";
        
        $result=  $this->conn->query($sql);
        
        if($result){
          return 'Succefully Created pessoa Info';     
        }else{
           return 'An error occurred while inserting data';     
        }
          
       
       
       
        
    }
    
    public function view_pessoa_by_pessoa_id($id){
       if(isset($id)){
       $pessoa_id= mysqli_real_escape_string($this->conn,trim($id));
      
       $sql="Select * from pessoas where pessoa_id='$pessoa_id'";
        
       $result=  $this->conn->query($sql);
     
        return $result->fetch_assoc(); 
    
       }  
    }
    
    
    public function update_pessoa_info($post_data=array()){
       if( isset($post_data->pessoa_id)){
       $pessoa_id=mysqli_real_escape_string($this->conn,trim($post_data->pessoa_id));
           
       $pessoa_nome='';
       if(isset($post_data->pessoa_nome)){
       $pessoa_nome= mysqli_real_escape_string($this->conn,trim($post_data->pessoa_nome));
       }
       
       $sql="UPDATE pessoas SET pessoa_nome='$pessoa_nome' WHERE pessoa_id =$pessoa_id";
     
        $result=  $this->conn->query($sql);
        
         
         unset($post_data->pessoa_id); 
         if($result){
          return 'Succefully Updated pessoa Info';     
        }else{
         return 'An error occurred while inserting data';     
        }
          
           
           
      
       }   
    }
    
    public function delete_pessoa_info_by_id($id){
        
       if(isset($id)){
       $pessoa_id= mysqli_real_escape_string($this->conn,trim($id));

       $sql="DELETE FROM  pessoas  WHERE pessoa_id =$pessoa_id";
        $result=  $this->conn->query($sql);
        
         if($result){
          return 'Successfully Deleted pessoa Info';     
        }else{
         return 'An error occurred while inserting data';     
        }
          
        
           
       }
        
    }
    function __destruct() {
    mysqli_close($this->conn);  
    }
    
}

?>