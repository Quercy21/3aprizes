-- CreateTable
CREATE TABLE `utilisateur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NULL,
    `prenom` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `UserName` VARCHAR(191) NULL,
    `Telephone` INTEGER NOT NULL,
    `sexe` VARCHAR(191) NOT NULL,
    `Ville` VARCHAR(191) NOT NULL,
    `Pays` VARCHAR(191) NOT NULL,
    `role` ENUM('admin', 'formateur') NOT NULL,
    `UserNewsId` INTEGER NOT NULL,
    `clientId` INTEGER NOT NULL,

    UNIQUE INDEX `utilisateur_UserName_key`(`UserName`),
    UNIQUE INDEX `utilisateur_clientId_key`(`clientId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `intitule` VARCHAR(191) NOT NULL,
    `Prerecquis` VARCHAR(191) NOT NULL,
    `prix` INTEGER NOT NULL,
    `heure` INTEGER NOT NULL,
    `delais` VARCHAR(191) NOT NULL,
    `creePar` VARCHAR(191) NOT NULL,
    `debut` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `duree` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rapport` (
    `userRapportId` INTEGER NOT NULL,
    `ForapportId` INTEGER NOT NULL,
    `intitule` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Rapport_intitule_key`(`intitule`),
    PRIMARY KEY (`userRapportId`, `ForapportId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paiement` (
    `FPaiementId` INTEGER NOT NULL,
    `CPaiementId` INTEGER NOT NULL,
    `montant` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `mode` ENUM('OrangeMoney', 'MobileMoney', 'VirementBancaire') NOT NULL,

    PRIMARY KEY (`FPaiementId`, `CPaiementId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NewsLetter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `informations` VARCHAR(191) NOT NULL,
    `DateEnvoie` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Section` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `intitule` VARCHAR(191) NOT NULL,
    `debut` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `duree` INTEGER NOT NULL,
    `formationId` INTEGER NOT NULL,
    `parentId` INTEGER NULL,

    UNIQUE INDEX `Section_formationId_key`(`formationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Entreprise` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `entrepriseId` INTEGER NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `num` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Entreprise_entrepriseId_key`(`entrepriseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `utilisateur` ADD CONSTRAINT `utilisateur_UserNewsId_fkey` FOREIGN KEY (`UserNewsId`) REFERENCES `NewsLetter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `utilisateur` ADD CONSTRAINT `utilisateur_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rapport` ADD CONSTRAINT `Rapport_userRapportId_fkey` FOREIGN KEY (`userRapportId`) REFERENCES `utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rapport` ADD CONSTRAINT `Rapport_ForapportId_fkey` FOREIGN KEY (`ForapportId`) REFERENCES `Formation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paiement` ADD CONSTRAINT `Paiement_FPaiementId_fkey` FOREIGN KEY (`FPaiementId`) REFERENCES `Formation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paiement` ADD CONSTRAINT `Paiement_CPaiementId_fkey` FOREIGN KEY (`CPaiementId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Section` ADD CONSTRAINT `Section_formationId_fkey` FOREIGN KEY (`formationId`) REFERENCES `Formation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Section` ADD CONSTRAINT `Section_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Section`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Entreprise` ADD CONSTRAINT `Entreprise_entrepriseId_fkey` FOREIGN KEY (`entrepriseId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
