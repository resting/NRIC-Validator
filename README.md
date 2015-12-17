# NRIC-Validator
Checksum Generator for NRICs
Can be used for Webapps to validate NRICs by generating Checksums

**Usage**

`generateChecksum(prefix, nric);`

will give return the suffix character for any NRIC number. Both inputs must be strings and of specific lengths; 1 for the prefix and 7 for the NRIC where the NRIC is only comprised of digits from 0-9. 
