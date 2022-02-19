<%@ page import="java.io.*" %> 
<%@ page errorPage="error.jsp" %> 
<%
        
		String msg = "this is from jsp page";
		
		System.out.println("hello");
		File f1 = new File("abc1.txt");
		f1.createNewFile();
		FileWriter fw = new FileWriter(f1);
		BufferedWriter bw = new BufferedWriter(fw);
		bw.write(msg);
		bw.close();
		//int a = 3/0;
		
		
		f1 = new File("abc1.txt");
		FileReader fr = new FileReader(f1);
		BufferedReader br = new BufferedReader(fr);
		String ms = br.readLine();
		out.println(ms);
		br.close();
		
%>

