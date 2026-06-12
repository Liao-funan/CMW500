# Configuring IPv6 Settings

Module: Data Application Unit
Source: b4afe40437784229.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Control
 > 
Configuring IPv6 Settings
Configuring IPv6 Settings
// *****************************************************************************
// Enable static IPv6 address configuration and configure
// the address of the DAU and the address of the default router.
// *****************************************************************************
CONFigure:DATA:CONTrol:IPVSix:ADDRess:TYPE STATic
CONFigure:DATA:CONTrol:IPVSix:STATic:ADDRess 'fcb1:c014::1/64'
CONFigure:DATA:CONTrol:IPVSix:STATic:DROuter 'fcb1:c014::1'
// *****************************************************************************
// Verify which addresses are really currently used.
// *****************************************************************************
SENSe:DATA:CONTrol:IPVSix:CURRent:IPADdress?
SENSe:DATA:CONTrol:IPVSix:CURRent:DROuter?
// *****************************************************************************
// Enable static configuration of the DUT address pool.
// Query the DUT address pool, delete the first entry and add a new entry.
// *****************************************************************************
CONFigure:DATA:CONTrol:IPVSix:MOBile:PREFix:TYPE STATic
SENSe:DATA:CONTrol:IPVSix:STATic:PREFixes:CATalog?
CONFigure:DATA:CONTrol:IPVSix:STATic:PREFixes:DELete 0
CONFigure:DATA:CONTrol:IPVSix:STATic:PREFixes:ADD 'fcb1:abab:cdcd:efe3::/64'
// *****************************************************************************
// If you configure the DUT address pool via DHCP or use the automatic
// standalone configuration, you can query the pool via the following commands.
// *****************************************************************************
SENSe:DATA:CONTrol:IPVSix:DHCP:PREFixes:CATalog?
SENSe:DATA:CONTrol:IPVSix:AUTomatic:PREFixes:CATalog?
// *****************************************************************************
// Enable manual configuration of routes and query the existing routes.
// Add two new routes, then delete the first one.
// *****************************************************************************
CONFigure:DATA:CONTrol:IPVSix:ROUTing:TYPE MAN
SENSe:DATA:CONTrol:IPVSix:MANual:ROUTing:CATalog?
CONFigure:DATA:CONTrol:IPVSix:MANual:ROUTing:ADD 'fcb1:014f::/64','fcb1:abcd::1'
CONFigure:DATA:CONTrol:IPVSix:MANual:ROUTing:ADD 'fcb1:afce::/64','fcb1:abcd::1'
CONFigure:DATA:CONTrol:IPVSix:MANual:ROUTing:DELete 'fcb1:014f::/64'
Top