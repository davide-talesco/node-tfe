terraform {
  required_providers {
    random = {
      source = "hashicorp/random"
      version = "3.0.0"
    }
  }
}
resource "random_string_broken" "random" {

}

output "random" {
  value = random_string.random.result
}