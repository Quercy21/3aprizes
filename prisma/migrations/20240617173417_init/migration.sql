-- DropIndex
DROP INDEX `Paiement_CPaiementId_fkey` ON `paiement`;

-- DropIndex
DROP INDEX `Rapport_ForapportId_fkey` ON `rapport`;

-- DropIndex
DROP INDEX `Section_parentId_fkey` ON `section`;

-- DropIndex
DROP INDEX `utilisateur_UserNewsId_fkey` ON `utilisateur`;

-- AlterTable
ALTER TABLE `newsletter` ALTER COLUMN `DateEnvoie` DROP DEFAULT;

-- AlterTable
ALTER TABLE `utilisateur` MODIFY `nom` VARCHAR(191) NULL,
    MODIFY `prenom` VARCHAR(191) NULL,
    MODIFY `sexe` VARCHAR(191) NULL,
    MODIFY `Ville` VARCHAR(191) NULL,
    MODIFY `Pays` VARCHAR(191) NULL,
    MODIFY `role` ENUM('admin', 'formateur') NULL;

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
