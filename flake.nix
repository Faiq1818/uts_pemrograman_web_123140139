{
  description = "UTS Praktikum Pemrograman Aplikasi Web RA";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
  };

  outputs = inputs @ {flake-parts, ...}:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
        "x86_64-darwin"
      ];
      perSystem = {
        pkgs,
        system,
        ...
      }: {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_24
          ];
          shellHook = ''
            echo "Hello from devShell!"
            exec zsh
          '';
        };
      };
    };
}
