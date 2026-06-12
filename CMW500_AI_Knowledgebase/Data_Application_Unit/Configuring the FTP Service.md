# Configuring the FTP Service

Module: Data Application Unit
Source: 918908f0f3b54421.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Control
 > 
Configuring the FTP Service
Configuring the FTP Service
// *****************************************************************************
// Select the FTP service type, allow access from external network,
// enable IPv6 support, allow access for anonymous users - but not upload.
// *****************************************************************************
CONFigure:DATA:CONTrol:FTP:STYPe SERV
CONFigure:DATA:CONTrol:FTP:ENConnection ON
CONFigure:DATA:CONTrol:FTP:IPVSix ON
CONFigure:DATA:CONTrol:FTP:AUSer ON
CONFigure:DATA:CONTrol:FTP:DUPLoad OFF
// *****************************************************************************
// Query information about existing FTP users.
// Create two new FTP users and delete the second one.
// *****************************************************************************
SENSe:DATA:CONTrol:FTP:USER:CATalog?
CONFigure:DATA:CONTrol:FTP:USER:ADD 'user1', 'newpwdxyz', ON, ON, ON
CONFigure:DATA:CONTrol:FTP:USER:ADD 'usernametypo', 'pwd', ON, ON, ON
CONFigure:DATA:CONTrol:FTP:USER:DELete 'usernametypo'
// *****************************************************************************
// Start the FTP service.
// *****************************************************************************
SOURce:DATA:CONTrol:FTP:STATe ON
Top